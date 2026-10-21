import { useMemo } from "react";
import { allCategories, allCities, allCountries } from "@/constants/experience-filters";
import type { Experience } from "@/types/experience";

export type ExperienceFilters = {
  query: string;
  category: string;
  country: string;
  city: string;
};

function createTitleRegex(searchTerm: string): RegExp | null {
  const trimmedTerm = searchTerm.trim();

  if (!trimmedTerm) return null;

  try {
    return new RegExp(trimmedTerm, "i");
  } catch {
    // Invalid regex input falls back to a literal, case-insensitive title search.
    const escapedTerm = trimmedTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(escapedTerm, "i");
  }
}

export function useExperiences(experiences: Experience[], filters: ExperienceFilters) {
  return useMemo(() => {
    const titleRegex = createTitleRegex(filters.query);

    return experiences.filter((experience) => {
      const matchesTitle = !titleRegex || titleRegex.test(experience.title);
      const matchesCategory = filters.category === allCategories || experience.category === filters.category;
      const matchesCountry = filters.country === allCountries || experience.country === filters.country;
      const matchesCity = filters.city === allCities || experience.location === filters.city;

      return matchesTitle && matchesCategory && matchesCountry && matchesCity;
    });
  }, [experiences, filters.category, filters.city, filters.country, filters.query]);
}
