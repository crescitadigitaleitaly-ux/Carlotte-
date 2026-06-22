export type TabType = 'HOME' | 'MENU' | 'STORY' | 'LOCATION';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'antipasti' | 'primi' | 'secondi' | 'dolci';
  description?: string;
  isGlutenFree?: boolean;
  isVegetarian?: boolean;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  specialRequests?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}
