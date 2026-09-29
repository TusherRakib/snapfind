import type { DiscoveryRepository } from "../domain/DiscoveryRepository";
import type { DiscoveryFeed } from "../domain/models";

export type LoadDiscoveryFeed = () => Promise<DiscoveryFeed>;

export function createLoadDiscoveryFeed(
  repository: DiscoveryRepository,
): LoadDiscoveryFeed {
  return () => repository.getFeed();
}