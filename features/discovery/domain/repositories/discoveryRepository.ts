import type { DiscoveryFeed } from "../entities/discoveryModels";

export interface DiscoveryRepository {
  getDiscoveryFeed(): Promise<DiscoveryFeed>;
}