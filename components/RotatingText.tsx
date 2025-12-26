
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
  texts: string[];
  transition?: any;
  initial?: any;
  animate?: any;
  exit?: any;
  animatePresenceMode?: 'wait' | 'popLayout' | 'sync';
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: 'first' | 'last' | 'center' | 'random' | number;
  loop?: boolean;
  auto?: boolean;
  splitBy?: 'characters' | 'words' | 'lines' | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
  className?: string;
  style?: React.CSSProperties;
}

const RotatingText = forwardRef((props: RotatingTextProps, ref) => {
  const {
    texts,
    // Snappier transition with no bounce to prevent "jiggling"
    transition = { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    // Fade and subtle scale instead of sliding up
    initial = { opacity: 0, scale: 0.98, filter: 'blur(4px)' },
    animate = { opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit = { opacity: 0, scale: 1.02, filter: 'blur(4px)' },
    animatePresenceMode = 'wait',
    animatePresenceInitial = false,
    rotationInterval = 2000, // Faster interval
    staggerDuration = 0.015, // Faster stagger
    staggerFrom = 'first',
    loop = true,
    auto = true,
    splitBy = 'characters',
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...rest
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const splitIntoCharacters = (text: string) => {
    if (typeof Intl !== 'undefined' && (Intl as any).Segmenter) {
      const segmenter = new (Intl as any).Segmenter('en', { granularity: 'grapheme' });
      return Array.from(segmenter.segment(text), (segment: any) => segment.segment);
    }
    return Array.from(text);
  };

  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex];
    if (splitBy === 'characters') {
      const words = currentText.split(' ');
      return words.map((word, i) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== words.length - 1
      }));
    }
    if (splitBy === 'words') {
      return currentText.split(' ').map((word, i, arr) => ({
        characters: [word],
        needsSpace: i !== arr.length - 1
      }));
    }
    return currentText.split(splitBy).map((part, i, arr) => ({
      characters: [part],
      needsSpace: i !== arr.length - 1
    }));
  }, [texts, currentTextIndex, splitBy]);

  const getStaggerDelay = useCallback(
    (index: number, totalChars: number) => {
      if (staggerFrom === 'first') return index * staggerDuration;
      if (staggerFrom === 'last') return (totalChars - 1 - index) * staggerDuration;
      if (staggerFrom === 'center') {
        const center = Math.floor(totalChars / 2);
        return Math.abs(center - index) * staggerDuration;
      }
      return index * staggerDuration;
    },
    [staggerFrom, staggerDuration]
  );

  const handleIndexChange = useCallback(
    (newIndex: number) => {
      setCurrentTextIndex(newIndex);
      if (onNext) onNext(newIndex);
    },
    [onNext]
  );

  const next = useCallback(() => {
    const nextIndex = currentTextIndex === texts.length - 1 ? (loop ? 0 : currentTextIndex) : currentTextIndex + 1;
    if (nextIndex !== currentTextIndex) {
      handleIndexChange(nextIndex);
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const previous = useCallback(() => {
    const prevIndex = currentTextIndex === 0 ? (loop ? texts.length - 1 : currentTextIndex) : currentTextIndex - 1;
    if (prevIndex !== currentTextIndex) {
      handleIndexChange(prevIndex);
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const jumpTo = useCallback(
    (index: number) => {
      const validIndex = Math.max(0, Math.min(index, texts.length - 1));
      if (validIndex !== currentTextIndex) {
        handleIndexChange(validIndex);
      }
    },
    [texts.length, currentTextIndex, handleIndexChange]
  );

  const reset = useCallback(() => {
    if (currentTextIndex !== 0) {
      handleIndexChange(0);
    }
  }, [currentTextIndex, handleIndexChange]);

  useImperativeHandle(ref, () => ({ next, previous, jumpTo, reset }), [next, previous, jumpTo, reset]);

  useEffect(() => {
    if (!auto) return;
    const intervalId = setInterval(next, rotationInterval);
    return () => clearInterval(intervalId);
  }, [next, rotationInterval, auto]);

  const totalCharacters = useMemo(() => 
    elements.reduce((sum, word) => sum + word.characters.length, 0), 
  [elements]);

  return (
    <motion.span 
      className={`text-rotate inline-block min-w-max ${mainClassName || ''}`} 
      {...rest}
    >
      <span className="text-rotate-sr-only">{texts[currentTextIndex]}</span>
      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <motion.span
          key={currentTextIndex}
          className="text-rotate inline-flex"
          aria-hidden="true"
        >
          {elements.map((wordObj, wordIndex, array) => {
            const previousCharsCount = array.slice(0, wordIndex).reduce((sum, word) => sum + word.characters.length, 0);
            return (
              <span key={wordIndex} className={`text-rotate-word ${splitLevelClassName || ''}`}>
                {wordObj.characters.map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                      ...transition,
                      delay: getStaggerDelay(previousCharsCount + charIndex, totalCharacters)
                    }}
                    className={`text-rotate-element ${elementLevelClassName || ''}`}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordObj.needsSpace && <span className="text-rotate-space">&nbsp;</span>}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
});

RotatingText.displayName = 'RotatingText';
export default RotatingText;
