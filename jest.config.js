module.exports = {
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.json"
    }
  },
  moduleFileExtensions: ["js", "json", "ts", "node"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["**/test/**/*.test.(ts|js)"],
  testEnvironment: "node"
};
