import { SymbolView } from "expo-symbols";
import { ImageBackground, Pressable, Text, View } from "react-native";
import type { FeaturedCollection } from "../../domain/entities/discoveryModels";
import { styles } from "../discoverStyles";
import { colors } from "../theme";

interface FeaturedCollectionCardProps {
  collection: FeaturedCollection;
  onSelectCategory: (category: FeaturedCollection["category"]) => void;
}

export default function FeaturedCollectionCard({
  collection,
  onSelectCategory,
}: FeaturedCollectionCardProps) {
  return (
    <Pressable
      accessibilityLabel={`Explore ${collection.category}`}
      accessibilityRole="button"
      onPress={() => onSelectCategory(collection.category)}
      style={styles.feature}
    >
      <ImageBackground
        imageStyle={styles.featureImage}
        source={{ uri: collection.imageUrl }}
        style={styles.featureImageBackground}
      >
        <View style={styles.featureShade} />
        <View style={styles.featureContent}>
          <View style={styles.featureLabel}>
            <View style={styles.featureDot} />
            <Text style={styles.featureLabelText}>{collection.label}</Text>
          </View>
          <Text style={styles.featureTitle}>{collection.title}</Text>
          <View style={styles.featureLink}>
            <Text style={styles.featureLinkText}>Explore interiors</Text>
            <SymbolView
              name={{
                ios: "arrow.up.right",
                android: "north_east",
                web: "north_east",
              }}
              tintColor={colors.ink}
              size={15}
            />
          </View>
        </View>
        <Text style={styles.featureNumber}>01</Text>
      </ImageBackground>
    </Pressable>
  );
}
