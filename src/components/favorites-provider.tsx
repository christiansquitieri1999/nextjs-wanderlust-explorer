"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

type FavoritesContextValue = {
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const value = useMemo<FavoritesContextValue>(
    () => ({
      favoriteIds,
      toggleFavorite: (id) => {
        setFavoriteIds((currentIds) =>
          currentIds.includes(id)
            ? currentIds.filter((favoriteId) => favoriteId !== id)
            : [...currentIds, id],
        );
      },
      isFavorite: (id) => favoriteIds.includes(id),
    }),
    [favoriteIds],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
}
