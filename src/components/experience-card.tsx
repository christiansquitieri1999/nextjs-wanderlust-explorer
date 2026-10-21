"use client";

import Link from "next/link";
import Image from "next/image";
import type { Experience } from "@/types/experience";

type ExperienceCardProps = {
  experience: Experience;
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
};

export function ExperienceCard({ experience, favoriteIds, onToggleFavorite }: ExperienceCardProps) {
  const favorite = favoriteIds.includes(experience.id);

  return (
    <article className="group min-w-0">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-stone-200">
        <Link href={`/experience/${experience.id}`} aria-label={`View ${experience.title}`}>
          <Image
            src={experience.imageUrl}
            alt={`${experience.location}, ${experience.country}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        </Link>
        <button
          type="button"
          onClick={() => onToggleFavorite(experience.id)}
          aria-label={favorite ? `Remove ${experience.title} from saved experiences` : `Save ${experience.title}`}
          aria-pressed={favorite}
          className={`absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white/90 text-xl shadow-sm backdrop-blur transition hover:scale-105 ${favorite ? "text-rose-600" : "text-stone-500"}`}
        >
          <span aria-hidden="true">{favorite ? "♥" : "♡"}</span>
        </button>
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-stone-700 backdrop-blur">
          {experience.category}
        </span>
      </div>
      <Link href={`/experience/${experience.id}`} className="mt-3 block">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-1 text-base font-semibold text-stone-900 group-hover:text-[#1f5b4d]">{experience.title}</h3>
          <span className="shrink-0 text-sm text-stone-700">★ {experience.rating.toFixed(1)}</span>
        </div>
        <p className="mt-1 text-sm text-stone-500">{experience.location}, {experience.country} · {experience.duration}</p>
        <p className="mt-2 text-sm text-stone-700"><strong className="text-stone-950">${experience.price}</strong> / person</p>
      </Link>
    </article>
  );
}
