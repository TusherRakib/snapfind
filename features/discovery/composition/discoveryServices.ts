import { createLoadDiscoveryFeed } from "../application/loadDiscoveryFeed";
import { MockDiscoveryRepository } from "../data/mock/MockDiscoveryRepository";

const discoveryRepository = new MockDiscoveryRepository();

export const loadDiscoveryFeed = createLoadDiscoveryFeed(discoveryRepository);