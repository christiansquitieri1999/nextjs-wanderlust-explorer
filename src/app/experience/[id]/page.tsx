import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExperienceFavoriteButton } from "@/components/experience-favorite-button";
import { experiences } from "@/data/experiences";

export function generateStaticParams() {
  return experiences.map((experience) => ({ id: experience.id }));
}

type ExperienceDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);

  if (!experience) notFound();

  return (
    <main className="mx-auto min-h-[calc(100vh-73px)] max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
      <Link href="/experiences" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-500 transition hover:text-[#1f5b4d]">
        <span aria-hidden="true">←</span> All experiences
      </Link>
      <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="overflow-hidden rounded-[2rem] bg-stone-200">
          <Image src={experience.imageUrl} alt={`${experience.location}, ${experience.country}`} width={1200} height={900} sizes="(max-width: 1024px) 100vw, 55vw" className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto lg:min-h-[560px]" />
        </div>
        <div className="py-2 lg:py-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#e8eee8] px-3 py-1.5 text-xs font-semibold text-[#285c4d]">{experience.category}</span>
            <span className="text-sm text-stone-500">{experience.location}, {experience.country}</span>
          </div>
          <h1 className="mt-5 font-serif text-4xl italic leading-tight tracking-tight text-stone-900 sm:text-5xl">{experience.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone-600">
            <span>★ <strong className="text-stone-900">{experience.rating.toFixed(1)}</strong> ({experience.reviewCount} reviews)</span>
            <span>◷ {experience.duration}</span>
          </div>
          <p className="mt-8 border-t border-stone-200 pt-7 text-base leading-8 text-stone-600">{experience.description}</p>
          <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-5 sm:p-6">
            <div className="flex items-end justify-between gap-4">
              <p className="text-sm text-stone-500">From <span className="text-2xl font-bold text-stone-900">${experience.price}</span> / person</p>
              <span className="text-xs text-stone-500">Free cancellation</span>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button type="button" className="flex-1 rounded-full bg-[#1f5b4d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#17483d]">Check availability</button>
              <ExperienceFavoriteButton experienceId={experience.id} />
            </div>
            <p className="mt-4 text-center text-xs text-stone-400">You won’t be charged yet</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-[#f0efe9] p-4"><p className="text-xs text-stone-500">Experience ID</p><p className="mt-1 text-sm font-semibold text-stone-800">{experience.id}</p></div>
            <div className="rounded-2xl bg-[#f0efe9] p-4"><p className="text-xs text-stone-500">Hosted in</p><p className="mt-1 text-sm font-semibold text-stone-800">{experience.country}</p></div>
          </div>
        </div>
      </div>
    </main>
  );
}
