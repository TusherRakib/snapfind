import type { DiscoveryRepository } from "../../domain/repositories/discoveryRepository";
import type { DiscoveryFeed } from "../../domain/entities/discoveryModels";
import { mockDiscoveryFeed } from "../dataSources/mockDiscoveryFeed";

export class MockDiscoveryRepository implements DiscoveryRepository {
  async getDiscoveryFeed(): Promise<DiscoveryFeed> {
    return mockDiscoveryFeed;
  }
}