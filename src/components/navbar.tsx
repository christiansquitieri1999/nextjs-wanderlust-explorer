"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/components/favorites-provider";

const links = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Explore" },
  { href: "/favorites", label: "Saved" },
  { href: "/profile", label: "Profile" },
];

export function Navbar() {
  const pathname = usePathname();
  const { favoriteIds } = useFavorites();

  return (
    <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-[#faf9f6]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-4">
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className={`flex items-center gap-2.5 self-start rounded-full sm:self-auto ${pathname === "/" ? "text-[#1f5b4d]" : "text-stone-900"}`}
          aria-label="Wanderlust home"
        >
          <span className="grid size-10 place-items-center rounded-full bg-[#1f5b4d] text-xl text-white">w.</span>
          <span className="text-lg font-semibold tracking-tight text-stone-900">wanderlust</span>
        </Link>
        <nav className="flex w-full items-center justify-between gap-1 sm:w-auto sm:justify-start sm:gap-3" aria-label="Main navigation">
          {links.map((link) => {
            const active = pathname === link.href || (link.href === "/experiences" && pathname.startsWith("/experience/"));
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition sm:px-4 ${active ? "bg-[#e8eee8] text-[#1f5b4d]" : "text-stone-600 hover:bg-stone-100 hover:text-stone-950"}`}
              >
                {link.label}
                {link.href === "/favorites" && favoriteIds.length > 0 && (
                  <span className="ml-1.5 text-xs text-[#1f5b4d]">{favoriteIds.length}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
