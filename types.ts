
export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  videoUrl?: string;
  description: string;
  type: 'Sale' | 'Rent';
  category: 'Residential' | 'Commercial' | 'Plot' | 'Flat' | 'Apartment';
}

export interface User {
  name: string;
  email: string;
  whatsapp: string;
  password?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type ViewState = 'customer' | 'admin' | 'detail';
