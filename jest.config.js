module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testPathIgnorePatterns: ["node_modules"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  testURL: "http://localhost",
  setupFilesAfterEnv: [
    "jest-dom/extend-expect",
    "@testing-library/react/cleanup-after-each"
  ],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  errorOnDeprecated: true
};
