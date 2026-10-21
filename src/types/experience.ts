export interface Experience {
  id: string;
  title: string;
  location: string;
  country: string;
  category: "Food & Drink" | "Culture" | "Adventure" | "Nature" | "Crafts";
  price: number;
  duration: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  description: string;
}
