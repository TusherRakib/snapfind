import type { DiscoveryRepository } from "../../domain/DiscoveryRepository";
import type { DiscoveryFeed } from "../../domain/models";
import { discoveryFeed } from "./discoveryFeed";

export class MockDiscoveryRepository implements DiscoveryRepository {
  async getFeed(): Promise<DiscoveryFeed> {
    return discoveryFeed;
  }
}
