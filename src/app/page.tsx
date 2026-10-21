import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/data/experiences";

const highlights = [
  { label: "Thoughtful local hosts", symbol: "✳" },
  { label: "Small groups, big memories", symbol: "↗" },
  { label: "A world beyond the guidebook", symbol: "⌖" },
];

export default function Home() {
  const featured = experiences[0];

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6e1d8] bg-[#eff3ed] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#285c4d]">
            <span className="size-2 rounded-full bg-[#55836c]" /> Make room for wonder
          </p>
          <h1 className="text-5xl font-medium leading-[1.04] tracking-[-0.055em] text-stone-900 sm:text-6xl lg:text-7xl">
            Find your <span className="font-serif italic text-[#47745f]">somewhere.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600 sm:text-xl">
            Less ticking boxes. More getting lost in the good stuff. Meet the people, flavors, and places that make a trip yours.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/experiences" className="rounded-full bg-[#1f5b4d] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#1f5b4d]/15 transition hover:-translate-y-0.5 hover:bg-[#17483d]">
              Explore experiences <span className="ml-3" aria-hidden="true">↗</span>
            </Link>
            <p className="text-sm text-stone-500">100+ ways to see the world differently</p>
          </div>
          <div className="mt-12 grid gap-4 border-t border-stone-200 pt-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-sm font-medium text-stone-600">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#e9eee8] text-lg text-[#346451]">{item.symbol}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -right-3 -top-4 z-10 rounded-full bg-[#e7b85f] px-5 py-3 text-sm font-semibold text-[#392d17] shadow-lg sm:right-2 sm:top-3">Go a little further ✳</div>
          <div className="relative aspect-[4/4.25] overflow-hidden rounded-[2rem] bg-stone-200 shadow-2xl shadow-stone-900/10 sm:rounded-[2.5rem]">
            {featured && <Image src={featured.imageUrl} alt="A quiet street in Kyoto" className="h-full w-full object-cover" fill priority sizes="(max-width: 768px) 100vw, 50vw" />}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">A local favorite</p>
              <p className="mt-2 font-serif text-3xl italic sm:text-4xl">Kyoto, at your own pace</p>
              <p className="mt-3 text-sm text-white/85">A little food, a lot of stories, and the streets in between.</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-stone-100 bg-white p-4 shadow-xl sm:-left-6 sm:p-5">
            <p className="text-xs text-stone-500">Loved by curious travelers</p>
            <p className="mt-1 text-sm font-semibold text-stone-900">★ 4.9 <span className="font-normal text-stone-500">from 12k+ guests</span></p>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-[#f2f0ea]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
          <p className="font-serif text-2xl italic text-stone-700">Travel isn’t just where you go. It’s who you meet along the way.</p>
          <Link href="/experiences" className="shrink-0 text-sm font-semibold text-[#1f5b4d] hover:underline">Find your next story <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
}
