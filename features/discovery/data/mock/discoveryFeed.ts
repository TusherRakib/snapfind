import type { DiscoveryFeed } from "../../domain/models";

export const discoveryFeed: DiscoveryFeed = {
  featured: {
    label: "THE SUNDAY EDIT",
    title: "A little more\nroom to breathe.",
    category: "Interiors",
    imageUrl:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90",
  },
  items: [
    {
      id: "quiet-corners",
      title: "Quiet corners",
      detail: "Interiors · 12 finds",
      category: "Interiors",
      imageUrl:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
      imageDescription: "Calm, sunlit living room with natural textures",
    },
    {
      id: "everyday-uniform",
      title: "Everyday uniform",
      detail: "Style · 8 finds",
      category: "Style",
      imageUrl:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
      imageDescription: "People browsing a curated clothing collection",
    },
    {
      id: "open-air",
      title: "Open air",
      detail: "Outdoors · 16 finds",
      category: "Outdoors",
      imageUrl:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",
      imageDescription: "Mountain lake surrounded by green hills",
    },
    {
      id: "little-rituals",
      title: "Little rituals",
      detail: "Objects · 9 finds",
      category: "Objects",
      imageUrl:
        "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=900&q=85",
      imageDescription: "Minimal handmade ceramic objects",
    },
  ],
};
