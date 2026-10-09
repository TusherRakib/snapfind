// This function is web-only as native does not currently support server rendering.
export function useClientOnlyValue<S, C>(server: S, client: C): S | C {
  return client;
}
