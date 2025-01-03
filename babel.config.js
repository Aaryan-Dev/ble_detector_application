module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@atoms': './src/components/atoms',
          '@pages': './src/pages',
          '@components': './src/components',
        },
      },
    ],
  ],
};
