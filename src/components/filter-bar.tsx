"use client";

import { allCategories, allCities, allCountries, categories } from "@/constants/experience-filters";

type FilterBarProps = {
  category: string;
  country: string;
  city: string;
  countries: string[];
  cities: string[];
  onChange: (updates: Record<string, string>) => void;
};

const selectedClass = "bg-[#1f5b4d] text-white";
const idleClass = "bg-[#f6f5f1] text-stone-600 hover:bg-[#e8eee8] hover:text-[#1f5b4d]";
const buttonClass = "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition";

export function FilterBar({ category, country, city, countries, cities, onChange }: FilterBarProps) {
  return (
    <section className="mt-8 rounded-3xl border border-stone-200 bg-white p-4 shadow-sm sm:p-5" aria-label="Filter experiences">
      <div className="grid gap-3 md:grid-cols-2">
        <label className="flex min-h-12 items-center gap-2 rounded-2xl bg-[#f6f5f1] px-4 text-sm text-stone-500">
          <span className="sr-only">Filter by country</span>
          <span aria-hidden="true">⌖</span>
          <select value={country} onChange={(event) => onChange({ country: event.target.value, city: allCities })} className="w-full bg-transparent text-sm text-stone-700 outline-none">
            <option>{allCountries}</option>
            {countries.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="flex min-h-12 items-center gap-2 rounded-2xl bg-[#f6f5f1] px-4 text-sm text-stone-500">
          <span className="sr-only">Filter by city</span>
          <span aria-hidden="true">⌖</span>
          <select value={city} onChange={(event) => onChange({ city: event.target.value })} className="w-full bg-transparent text-sm text-stone-700 outline-none">
            <option>{allCities}</option>
            {cities.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter by category">
        <button type="button" onClick={() => onChange({ category: allCategories })} aria-pressed={category === allCategories} className={`${buttonClass} ${category === allCategories ? selectedClass : idleClass}`}>
          All categories
        </button>
        {categories.map((item) => (
          <button key={item} type="button" onClick={() => onChange({ category: item })} aria-pressed={category === item} className={`${buttonClass} ${category === item ? selectedClass : idleClass}`}>
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
