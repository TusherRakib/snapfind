export const discoveryCategories = [
  "All",
  "Interiors",
  "Style",
  "Outdoors",
  "Objects",
] as const;

export type DiscoveryCategory = (typeof discoveryCategories)[number];
export type DiscoveryItemCategory = Exclude<DiscoveryCategory, "All">;

export interface DiscoveryItem {
  id: string;
  title: string;
  detail: string;
  category: DiscoveryItemCategory;
  imageUrl: string;
  imageDescription: string;
}

export interface FeaturedCollection {
  label: string;
  title: string;
  category: DiscoveryItemCategory;
  imageUrl: string;
}

export interface DiscoveryFeed {
  featured: FeaturedCollection;
  items: DiscoveryItem[];
}