import { loadDiscoveryFeed } from "@/features/discovery/composition/discoveryServices";
import DiscoverScreen from "@/features/discovery/presentation/DiscoverScreen";

export default function IndexScreen() {
  return <DiscoverScreen loadFeed={loadDiscoveryFeed} />;
}
