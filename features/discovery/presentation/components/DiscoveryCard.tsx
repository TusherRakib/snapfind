import { SymbolView } from "expo-symbols";
import { Image, Pressable, Text, View } from "react-native";
import type { DiscoveryItem } from "../../domain/entities/discoveryModels";
import { styles } from "../discoverStyles";
import { colors } from "../theme";

interface DiscoveryCardProps {
  item: DiscoveryItem;
  isSaved: boolean;
  onToggleSaved: (id: string) => void;
}

export default function DiscoveryCard({
  item,
  isSaved,
  onToggleSaved,
}: DiscoveryCardProps) {
  return (
    <View style={styles.discoveryCard}>
      <View style={styles.discoveryImageWrap}>
        <Image
          accessibilityLabel={item.imageDescription}
          resizeMode="cover"
          source={{ uri: item.imageUrl }}
          style={styles.discoveryImage}
        />
        <Pressable
          accessibilityLabel={
            isSaved ? `Remove ${item.title} from saved` : `Save ${item.title}`
          }
          accessibilityRole="button"
          accessibilityState={{ selected: isSaved }}
          onPress={() => onToggleSaved(item.id)}
          style={styles.saveButton}
        >
          <SymbolView
            name={{
              ios: isSaved ? "bookmark.fill" : "bookmark",
              android: isSaved ? "bookmark" : "bookmark_border",
              web: isSaved ? "bookmark" : "bookmark_border",
            }}
            tintColor={colors.ink}
            size={17}
          />
        </Pressable>
      </View>
      <Text style={styles.discoveryTitle}>{item.title}</Text>
      <Text style={styles.discoveryDetail}>{item.detail}</Text>
    </View>
  );
}
