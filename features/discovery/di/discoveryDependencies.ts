import { createLoadDiscoveryFeed } from "../domain/useCases/loadDiscoveryFeed";
import { MockDiscoveryRepository } from "../data/repositories/mockDiscoveryRepository";

const discoveryRepository = new MockDiscoveryRepository();

export const loadDiscoveryFeed = createLoadDiscoveryFeed(discoveryRepository);