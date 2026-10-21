import type { Experience } from "@/types/experience";

type Destination = {
  city: string;
  country: string;
  imageUrl: string;
};

const destinations: Destination[] = [
  { city: "Kyoto", country: "Japan", imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80" },
  { city: "Lisbon", country: "Portugal", imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80" },
  { city: "Marrakech", country: "Morocco", imageUrl: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80" },
  { city: "Reykjavik", country: "Iceland", imageUrl: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1200&q=80" },
  { city: "Mexico City", country: "Mexico", imageUrl: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1200&q=80" },
  { city: "Florence", country: "Italy", imageUrl: "https://images.unsplash.com/photo-1543429257-6a7e5e1e3b27?auto=format&fit=crop&w=1200&q=80" },
  { city: "Cape Town", country: "South Africa", imageUrl: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=80" },
  { city: "Bangkok", country: "Thailand", imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80" },
  { city: "New York", country: "United States", imageUrl: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1200&q=80" },
  { city: "Barcelona", country: "Spain", imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80" },
  { city: "Vancouver", country: "Canada", imageUrl: "https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&w=1200&q=80" },
  { city: "Istanbul", country: "Türkiye", imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80" },
  { city: "Queenstown", country: "New Zealand", imageUrl: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80" },
  { city: "Paris", country: "France", imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80" },
  { city: "Cusco", country: "Peru", imageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80" },
  { city: "Dubrovnik", country: "Croatia", imageUrl: "https://images.unsplash.com/photo-1555990793-da11153b2473?auto=format&fit=crop&w=1200&q=80" },
  { city: "Cairo", country: "Egypt", imageUrl: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1200&q=80" },
  { city: "Bali", country: "Indonesia", imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80" },
  { city: "Edinburgh", country: "United Kingdom", imageUrl: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&w=1200&q=80" },
  { city: "Maui", country: "United States", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" },
];

const activities = [
  {
    title: "Local food & market walk",
    category: "Food & Drink",
    duration: "3 hours",
    basePrice: 48,
    description: "Taste regional specialties, meet local vendors, and discover the stories behind the neighborhood's favorite flavors.",
  },
  {
    title: "Old town stories & landmarks",
    category: "Culture",
    duration: "2.5 hours",
    basePrice: 35,
    description: "Explore historic streets with a local guide and hear the human stories behind the area's best-known landmarks.",
  },
  {
    title: "Scenic trails & hidden viewpoints",
    category: "Adventure",
    duration: "5 hours",
    basePrice: 72,
    description: "Get outdoors on a guided route featuring memorable views, quieter paths, and plenty of time for photos.",
  },
  {
    title: "Sunrise nature escape",
    category: "Nature",
    duration: "4 hours",
    basePrice: 64,
    description: "Start early for a peaceful nature outing, with a local guide sharing insight into the landscape and wildlife.",
  },
  {
    title: "Hands-on traditional craft workshop",
    category: "Crafts",
    duration: "2 hours",
    basePrice: 55,
    description: "Learn a traditional making technique from a local artisan and create a small handmade keepsake to take home.",
  },
] as const;

// Five activities for each of 20 destinations create exactly 100 ready-to-use listings.
export const experiences: Experience[] = destinations.flatMap((destination, destinationIndex) =>
  activities.map((activity, activityIndex) => {
    const number = destinationIndex * activities.length + activityIndex + 1;

    return {
      id: `experience-${String(number).padStart(3, "0")}`,
      title: `${activity.title} in ${destination.city}`,
      location: destination.city,
      country: destination.country,
      category: activity.category,
      price: activity.basePrice + ((destinationIndex * 7 + activityIndex * 11) % 46),
      duration: activity.duration,
      rating: Number((4.6 + ((destinationIndex * 3 + activityIndex * 2) % 5) / 10).toFixed(1)),
      reviewCount: 38 + ((destinationIndex * 37 + activityIndex * 19) % 463),
      imageUrl: destination.imageUrl,
      description: `${activity.description} Available in ${destination.city}, ${destination.country}.`,
    };
  }),
);
