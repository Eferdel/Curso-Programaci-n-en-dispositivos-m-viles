export default {
  name: "AbsoluteAds",
  version: process.env.ABSOLUTE_ADS_PROJECT_VERSION || '1.0.0',
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  updates: {
    "fallbackToCacheTimeout": 0
  },
  assetBundlePatterns: [
    "**/*"
  ],
  android: {
    package: "es.cursosdesarrolloweb.absoluteads",
    versionCode: 1,
  },
  ios: {
    bundleIdentifier: "es.cursosdesarrolloweb.absoluteads",
    buildNumber: "1.0.0",
  },
  extra: {
    api_url: "http://192.168.1.29:8000/api",
  }
}
