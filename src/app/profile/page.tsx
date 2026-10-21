"use client";

import Link from "next/link";
import { useFavorites } from "@/components/favorites-provider";

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <main className="mx-auto min-h-[calc(100vh-73px)] max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#47745f]">A little space that’s yours</p>
      <h1 className="mt-3 font-serif text-4xl italic tracking-tight text-stone-900 sm:text-5xl">Your travel profile.</h1>
      <section className="mt-8 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
        <div className="h-36 bg-[linear-gradient(115deg,#dce8dc,#f1e8d7_55%,#d9e3df)]" />
        <div className="px-6 pb-8 sm:px-10">
          <div className="-mt-12 grid size-24 place-items-center rounded-full border-4 border-white bg-[#1f5b4d] font-serif text-3xl italic text-white shadow-md">A</div>
          <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-stone-900">Alex Morgan</h2>
              <p className="mt-1 text-sm text-stone-500">Curious traveler · Member since 2024</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600">Always looking for the side street, the family-run kitchen, and the people who make a place feel like a story.</p>
            </div>
            <span className="w-fit rounded-full bg-[#eff3ed] px-4 py-2 text-xs font-semibold text-[#285c4d]">✳ Explorer</span>
          </div>
          <div className="mt-8 grid gap-4 border-t border-stone-200 pt-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#f6f5f1] p-5">
              <p className="text-3xl font-semibold text-stone-900">{favoriteIds.length}</p>
              <p className="mt-1 text-sm text-stone-500">Saved {favoriteIds.length === 1 ? "experience" : "experiences"}</p>
            </div>
            <div className="rounded-2xl bg-[#f6f5f1] p-5">
              <p className="text-3xl font-semibold text-stone-900">12</p>
              <p className="mt-1 text-sm text-stone-500">Places on your someday list</p>
            </div>
          </div>
          <Link href="/favorites" className="mt-6 inline-flex rounded-full bg-[#1f5b4d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#17483d]">See saved experiences <span className="ml-2" aria-hidden="true">→</span></Link>
        </div>
      </section>
      <p className="mt-5 text-xs leading-5 text-stone-400">Demo profile. Saved experiences are kept in memory only and reset when you refresh the page.</p>
    </main>
  );
}
