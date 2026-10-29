/**
 * App version, stamped into app.json by CI. This fork has no self-update
 * mechanism: the app never contacts anything except the configured Papra server.
 */
import Constants from "expo-constants";

export function appVersion(): string {
  return Constants.expoConfig?.version ?? "0.0.0";
}
