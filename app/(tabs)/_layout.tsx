import { useClientOnlyValue } from "@/shared/hooks/useClientOnlyValue";
import { useColorScheme } from "@/shared/hooks/useColorScheme";
import Colors from "@/shared/theme/Colors";
import { Tabs } from "expo-router";
import { SymbolView } from "expo-symbols";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Discover",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: "magnifyingglass",
                android: "search",
                web: "search",
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
    </Tabs>
  );
}
