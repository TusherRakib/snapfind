import type { DiscoveryRepository } from "../repositories/discoveryRepository";
import type { DiscoveryFeed } from "../entities/discoveryModels";

export type LoadDiscoveryFeed = () => Promise<DiscoveryFeed>;

export function createLoadDiscoveryFeed(
  repository: DiscoveryRepository,
): LoadDiscoveryFeed {
  return () => repository.getDiscoveryFeed();
}