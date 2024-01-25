const { getDefaultConfig } = require('@react-native/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  return {
    resolver: {
      ...defaultConfig.resolver,
      project: {
        android: {
          sourceDir: './',
        },
      },
      sourceExts: [...defaultConfig.resolver.sourceExts, "jsx", "js", "ts", "tsx"],
    },
    transformer: {
      ...defaultConfig.transformer,
      assetPlugins: [...defaultConfig.transformer.assetPlugins, "expo-asset/tools/hashAssetFiles"],
    },
  };
})();
