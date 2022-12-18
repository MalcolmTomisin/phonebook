module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
};

module.exports = api => {
  const babelEnv = api.env();
  const plugins = [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['./src'],
      },
    ],
    // ['module:react-native-dotenv'],
    ['react-native-paper/babel'],
  ];
  //change to 'production' to check if this is working in 'development' mode
  if (babelEnv !== 'development') {
    plugins.push(['transform-remove-console', {exclude: ['error', 'warn']}]);
  }
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [...plugins, 'optional-require', 'react-native-reanimated/plugin'],
  };
};
