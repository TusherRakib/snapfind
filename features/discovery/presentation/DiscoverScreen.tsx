import { SymbolView } from "expo-symbols";
import { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { filterDiscoveryItems } from "../application/filterDiscoveryItems";
import type { LoadDiscoveryFeed } from "../application/loadDiscoveryFeed";
import type { DiscoveryCategory, DiscoveryFeed } from "../domain/models";
import CategoryFilters from "./components/CategoryFilters";
import DiscoveryCard from "./components/DiscoveryCard";
import FeaturedCollectionCard from "./components/FeaturedCollectionCard";
import { styles } from "./discoverStyles";
import { colors } from "./theme";

interface DiscoverScreenProps {
  loadFeed: LoadDiscoveryFeed;
}

export default function DiscoverScreen({ loadFeed }: DiscoverScreenProps) {
  const [feed, setFeed] = useState<DiscoveryFeed | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<DiscoveryCategory>("All");
  const [query, setQuery] = useState("");
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    let isCurrent = true;

    loadFeed()
      .then((result) => {
        if (isCurrent) setFeed(result);
      })
      .catch(() => {
        if (isCurrent) setLoadError("We couldn't load your discoveries.");
      });

    return () => {
      isCurrent = false;
    };
  }, [loadFeed]);

  const visibleDiscoveries = feed
    ? filterDiscoveryItems(feed.items, selectedCategory, query)
    : [];

  function toggleSaved(id: string) {
    setSavedIds((current) =>
      current.includes(id)
        ? current.filter((savedId) => savedId !== id)
        : [...current, id],
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.topBar}>
          <View style={styles.brand}>
            <View style={styles.brandMark}>
              <SymbolView
                name={{
                  ios: "viewfinder",
                  android: "center_focus_strong",
                  web: "center_focus_strong",
                }}
                tintColor={colors.green}
                size={20}
              />
            </View>
            <Text style={styles.brandName}>snapfind</Text>
          </View>
          <Text style={styles.topNote}>YOUR VISUAL FIELD GUIDE</Text>
        </View>

        <View style={styles.intro}>
          <Text style={styles.kicker}>MONDAY, SEPTEMBER 28</Text>
          <Text style={styles.title}>Find something{"\n"}worth keeping.</Text>
        </View>

        <View style={styles.searchBox}>
          <SymbolView
            name={{ ios: "magnifyingglass", android: "search", web: "search" }}
            tintColor={colors.muted}
            size={19}
          />
          <TextInput
            accessibilityLabel="Search visual discoveries"
            onChangeText={setQuery}
            placeholder="Try ‘quiet interiors’"
            placeholderTextColor={colors.muted}
            returnKeyType="search"
            style={styles.searchInput}
            value={query}
          />
          <View style={styles.searchShortcut}>
            <SymbolView
              name={{
                ios: "camera",
                android: "photo_camera",
                web: "photo_camera",
              }}
              tintColor={colors.surface}
              size={17}
            />
          </View>
        </View>

        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>Browse by mood</Text>
          <Text style={styles.sectionIndex}>01 / 03</Text>
        </View>

        {feed ? (
          <>
            <CategoryFilters
              onSelectCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
            <FeaturedCollectionCard
              collection={feed.featured}
              onSelectCategory={setSelectedCategory}
            />
            <View style={[styles.sectionHeading, styles.freshHeading]}>
              <View>
                <Text style={styles.sectionTitle}>Fresh finds</Text>
                <Text style={styles.sectionSubheading}>
                  Small things, well spotted.
                </Text>
              </View>
              <Text style={styles.resultCount}>
                {String(visibleDiscoveries.length).padStart(2, "0")}
              </Text>
            </View>

            {visibleDiscoveries.length > 0 ? (
              <View style={styles.discoveryGrid}>
                {visibleDiscoveries.map((item) => (
                  <DiscoveryCard
                    isSaved={savedIds.includes(item.id)}
                    item={item}
                    key={item.id}
                    onToggleSaved={toggleSaved}
                  />
                ))}
              </View>
            ) : (
              <View style={styles.emptyState}>
                <Text style={styles.emptyTitle}>Nothing in the frame yet.</Text>
                <Text style={styles.emptyText}>Try another word or mood.</Text>
              </View>
            )}
          </>
        ) : (
          <View style={styles.loadingState}>
            <Text style={styles.loadingText}>
              {loadError ?? "Gathering inspiration..."}
            </Text>
          </View>
        )}

        <View style={styles.footer}>
          <Text style={styles.footerText}>GOOD EYE. KEEP LOOKING.</Text>
          <View style={styles.footerMark} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
