module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src'
        },
        extensions: ['.svg']
      }
    ],
    'react-native-reanimated/plugin'
  ],
  plugins: ['transform-inline-environment-variables']
}
