"use client";

import Link from "next/link";
import { ExperienceCard } from "@/components/experience-card";
import { useFavorites } from "@/components/favorites-provider";
import { experiences } from "@/data/experiences";

export default function FavoritesPage() {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) => favoriteIds.includes(experience.id));

  return (
    <main className="mx-auto min-h-[calc(100vh-73px)] max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#47745f]">Your little collection</p>
      <h1 className="mt-3 font-serif text-4xl italic tracking-tight text-stone-900 sm:text-5xl">Saved for later.</h1>
      <p className="mt-4 text-base text-stone-600">Keep the experiences you love close while you dream up your next trip.</p>
      {favoriteExperiences.length > 0 ? (
        <>
          <p className="mb-5 mt-8 text-sm text-stone-500">{favoriteExperiences.length} {favoriteExperiences.length === 1 ? "experience" : "experiences"} saved</p>
          <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favoriteExperiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                favoriteIds={favoriteIds}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </>
      ) : (
        <section className="mt-10 rounded-[2rem] border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#eff3ed] text-3xl text-[#47745f]" aria-hidden="true">♡</span>
          <h2 className="mt-5 text-xl font-semibold text-stone-900">Your saved list is waiting for a story.</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-stone-500">Tap the heart on any experience to keep it here. Your picks stay around while this tab is open.</p>
          <Link href="/experiences" className="mt-6 inline-flex rounded-full bg-[#1f5b4d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#17483d]">Find an experience</Link>
        </section>
      )}
    </main>
  );
}
