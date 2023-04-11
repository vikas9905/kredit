import 'dotenv/config';
export default {
  "expo": {
    "name": "kredit",
    "slug": "kredit",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash_3.png",
      "resizeMode": "contain",
      "backgroundColor": "#6E3CBC"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*",
      "./assets/fonts"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.truepromise.kredit",
      // "config": {
      //   "googleSignIn": {
      //     "reservedClientId": process.env.iosReversedClientId
      //   }
      // },
      "googleServicesFile": "./GoogleService-Info.plist"
    },
    "android": {
      "package": "com.truepromise.kredit",
      "googleServicesFile": "./google-services.json",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      webClientId: process.env.webClientId,
      androidClientId: process.env.androidClientId,
      "eas": {
        "projectId": "1b256d6a-0dd1-4498-a2cb-a77c5e788a68"
      }
    }
  }
}
