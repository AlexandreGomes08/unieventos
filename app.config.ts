import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: config.name || "UniEventos",
  slug: config.slug || "uni-eventos",
  web: {
    ...(config.web || {}),
    bundler: "metro",
  },
});
