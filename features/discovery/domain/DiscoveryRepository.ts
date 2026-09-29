import type { DiscoveryFeed } from "./models";

export interface DiscoveryRepository {
  getFeed(): Promise<DiscoveryFeed>;
}