/*eslint-disable*/
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
  plugins: [
    ["module:react-native-dotenv", {
      "envName": "DEV_ENV",
      "moduleName": "@env",
      "path": ".env",
      "allowUndefined": true
      // "blocklist": null,
      // "allowlist": null,
      // "blacklist": null, // DEPRECATED
      // "whitelist": null, // DEPRECATED
      // "safe": false,
      // "allowUndefined": true,
      // "verbose": false
    }]
  ],
  // "plugins": ["@react-native-google-signin/google-signin"]
};
