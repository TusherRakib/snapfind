import { loadDiscoveryFeed } from "@/features/discovery/di/discoveryDependencies";
import DiscoverScreen from "@/features/discovery/presentation/screens/DiscoverScreen";

export default function IndexScreen() {
  return <DiscoverScreen loadFeed={loadDiscoveryFeed} />;
}
