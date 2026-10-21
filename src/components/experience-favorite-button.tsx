"use client";

import { useFavorites } from "@/components/favorites-provider";

export function ExperienceFavoriteButton({ experienceId }: { experienceId: string }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(experienceId);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(experienceId)}
      aria-pressed={favorite}
      className="rounded-full border border-stone-300 px-6 py-3.5 text-sm font-semibold text-stone-700 transition hover:border-[#1f5b4d] hover:text-[#1f5b4d]"
    >
      <span aria-hidden="true">{favorite ? "♥" : "♡"}</span> {favorite ? "Saved" : "Save"}
    </button>
  );
}
