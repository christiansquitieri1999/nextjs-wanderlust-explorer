"use client";

import { ExperienceCard } from "@/components/experience-card";
import type { Experience } from "@/types/experience";

type ExperienceGridProps = {
  experiences: Experience[];
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  onClearFilters: () => void;
};

export function ExperienceGrid({ experiences, favoriteIds, onToggleFavorite, onClearFilters }: ExperienceGridProps) {
  if (experiences.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
        <span className="text-4xl" aria-hidden="true">⌕</span>
        <h3 className="mt-4 text-lg font-semibold">No results found</h3>
        <p className="mt-2 text-sm text-stone-500">Try another search or clear a filter to see more of the world.</p>
        <button type="button" onClick={onClearFilters} className="mt-5 rounded-full bg-[#1f5b4d] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#17483d]">
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          favoriteIds={favoriteIds}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
