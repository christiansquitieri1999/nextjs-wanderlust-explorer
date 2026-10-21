"use client";

type SearchBarProps = {
  value: string;
  onSearch: (value: string) => void;
};

export function SearchBar({ value, onSearch }: SearchBarProps) {
  return (
    <label className="flex min-h-12 items-center gap-3 rounded-2xl bg-[#f6f5f1] px-4">
      <span className="text-xl text-stone-400" aria-hidden="true">⌕</span>
      <span className="sr-only">Search experience titles (regular expression)</span>
      <input
        value={value}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search titles (e.g. food|market)"
        className="w-full bg-transparent text-sm text-stone-900 outline-none placeholder:text-stone-400"
      />
    </label>
  );
}
