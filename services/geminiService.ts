
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getRealEstateAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are the "Official Support Assistant" for Ayaz Associates, Karachi. 
        Your goal is to handle FAQs, resolve queries, and provide expert real estate encouragement.

        DIRECTORS & CONTACTS:
        - Faiz Ali Khan (Director & Properties Adviser): +92 302 2879563. He specializes in high-end sales and purchase advisory.
        - Ayaz Ali Khan (Director): +92 332 3251465. He is the primary point for strategic investment in Scheme 33.

        KEY PROTOCOLS:
        1. When a user is confused or needs specific advice, encourage them by saying "Our Directors have decades of experience to secure your future."
        2. Provide their names and numbers clearly so the user can connect via WhatsApp or Call.
        3. For office visits, mention Shop 10-11, Sania Corner, Gulzar-e-Hijri, Scheme 33, Karachi.
        4. Focus on Karachi markets: Scheme 33, Saadi Town, Gulshan-e-Iqbal, etc.
        5. Tone: Professional, reassuring, and highly helpful.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm here to help! For immediate assistance from our Directors, please contact Faiz Ali Khan at +92 302 2879563 or Ayaz Ali Khan at +92 332 3251465.";
  }
};
