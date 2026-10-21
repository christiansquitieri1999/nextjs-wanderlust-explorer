"use client";

import { useEffect } from "react";
import { allCategories, allCities, allCountries } from "@/constants/experience-filters";
import { useFavorites } from "@/components/favorites-provider";
import { ExperienceGrid } from "@/components/experience-grid";
import { FilterBar } from "@/components/filter-bar";
import { SearchBar } from "@/components/search-bar";
import { experiences } from "@/data/experiences";
import { useExperiences } from "@/hooks/use-experiences";
import { useFilters } from "@/hooks/use-filters";

export function ExperienceExplorer() {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const filters = useFilters();
  const filteredExperiences = useExperiences(experiences, filters);

  useEffect(() => {
    document.title = filters.query
      ? `Search: ${filters.query} | Wanderlust`
      : "Explore experiences | Wanderlust";
  }, [filters.query]);

  const hasActiveFilters = Boolean(
    filters.query || filters.category !== allCategories ||
    filters.country !== allCountries || filters.city !== allCities,
  );

  return (
    <main className="mx-auto min-h-[calc(100vh-73px)] max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#47745f]">The good stuff, up close</p>
        <h1 className="mt-3 font-serif text-4xl italic tracking-tight text-stone-900 sm:text-5xl">Find your kind of elsewhere.</h1>
        <p className="mt-4 text-base leading-7 text-stone-600">Little moments make the big trips. Find a local food walk, a hidden trail, or a story you’ll bring home.</p>
      </header>

      <section className="mt-8 rounded-3xl border border-stone-200 bg-white p-4 shadow-sm sm:p-5" aria-label="Search and filter experiences">
        <SearchBar value={filters.query} onSearch={(query) => filters.updateFilters({ q: query })} />
        <FilterBar
          category={filters.category}
          country={filters.country}
          city={filters.city}
          countries={filters.countries}
          cities={filters.cities}
          onChange={filters.updateFilters}
        />
      </section>

      <div className="mb-5 mt-8 flex items-end justify-between gap-4">
        <h2 className="text-lg font-semibold text-stone-900">Experiences <span className="font-normal text-stone-400">({filteredExperiences.length})</span></h2>
        {hasActiveFilters && <button type="button" onClick={filters.clearFilters} className="text-sm font-medium text-[#1f5b4d] hover:underline">Clear filters</button>}
      </div>

      <ExperienceGrid
        experiences={filteredExperiences}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
        onClearFilters={filters.clearFilters}
      />
    </main>
  );
}
