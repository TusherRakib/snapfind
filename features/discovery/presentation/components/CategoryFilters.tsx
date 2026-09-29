import { Pressable, ScrollView, Text } from "react-native";
import type { DiscoveryCategory } from "../../domain/models";
import { discoveryCategories } from "../../domain/models";
import { styles } from "../discoverStyles";

interface CategoryFiltersProps {
  selectedCategory: DiscoveryCategory;
  onSelectCategory: (category: DiscoveryCategory) => void;
}

export default function CategoryFilters({
  selectedCategory,
  onSelectCategory,
}: CategoryFiltersProps) {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.categoryList}
      showsHorizontalScrollIndicator={false}
    >
      {discoveryCategories.map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected: isSelected }}
            key={category}
            onPress={() => onSelectCategory(category)}
            style={[
              styles.categoryChip,
              isSelected && styles.categoryChipSelected,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                isSelected && styles.categoryTextSelected,
              ]}
            >
              {category}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
