import type { DiscoveryCategory, DiscoveryItem } from "../domain/models";

export function filterDiscoveryItems(
  items: DiscoveryItem[],
  category: DiscoveryCategory,
  query: string,
): DiscoveryItem[] {
  const normalizedQuery = query.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const searchableText = `${item.title} ${item.detail} ${item.category}`;
    return (
      matchesCategory && searchableText.toLowerCase().includes(normalizedQuery)
    );
  });
}
