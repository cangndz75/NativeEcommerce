const {
  getDefaultConfig,
  mergeConfig,
  getDefaultConfig,
} = require('@react-native/metro-config');
const getDefaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = getDefaultConfig.resolver;
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve(
      'react-native-typescript-transformer',
    ),
  },
  resolver: {
    sourceExts: [...sourceExts, 'svg'],
    assetExts: assetExts.filter(ext => ext !== 'svg'),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
