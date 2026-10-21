import type { Experience } from "@/types/experience";

export const categories = ["Food & Drink", "Culture", "Adventure", "Nature", "Crafts"] as const satisfies readonly Experience["category"][];
export const allCategories = "All categories";
export const allCountries = "All countries";
export const allCities = "All cities";
