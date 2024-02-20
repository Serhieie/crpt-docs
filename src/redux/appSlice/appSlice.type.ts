import type { ApiEndpoint } from "operationsArray";
export interface AppState {
  operations: ApiEndpoint[];
  isAuthOpen: boolean;
  isAssetsOpen: boolean;
  showCode: boolean;
}
