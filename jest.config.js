export default {
  testEnvironment: "jest-environment-node",
  testTimeout: 30000,
  transform: {},

  preset: "ts-jest/presets/default-esm",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleNameMapper: {
    "^(.*)\\.js$": "$1",
  },
};
