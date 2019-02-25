module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testPathIgnorePatterns: ["node_modules"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  testURL: "http://localhost",
  setupFilesAfterEnv: [
    "jest-dom/extend-expect",
    "react-testing-library/cleanup-after-each"
  ],
  restoreMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  errorOnDeprecated: true
};
