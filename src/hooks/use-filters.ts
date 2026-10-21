import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { allCategories, allCities, allCountries, categories } from "@/constants/experience-filters";
import { experiences } from "@/data/experiences";

export function useFilters() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("q") ?? "";
  const requestedCategory = searchParams.get("category");
  const category = categories.find((item) => item === requestedCategory) ?? allCategories;
  const countries = useMemo(
    () => [...new Set(experiences.map((experience) => experience.country))].sort((a, b) => a.localeCompare(b)),
    [],
  );
  const requestedCountry = searchParams.get("country");
  const country = requestedCountry && countries.includes(requestedCountry) ? requestedCountry : allCountries;
  const cities = useMemo(
    () => [...new Set(
      experiences
        .filter((experience) => country === allCountries || experience.country === country)
        .map((experience) => experience.location),
    )].sort((a, b) => a.localeCompare(b)),
    [country],
  );
  const requestedCity = searchParams.get("city");
  const city = requestedCity && cities.includes(requestedCity) ? requestedCity : allCities;

  const updateFilters = useCallback((updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());

    for (const [key, value] of Object.entries(updates)) {
      if (!value || value === allCategories || value === allCountries || value === allCities) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    }

    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
  }, [pathname, router, searchParams]);

  const clearFilters = useCallback(() => {
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  return { query, category, country, city, countries, cities, updateFilters, clearFilters };
}
