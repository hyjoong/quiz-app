const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@pages/(.*)$": "<rootDir>/pages/$1",
    "^@hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@type/(.*)$": "<rootDir>/type/$1",
    "^@lib/(.*)$": "<rootDir>/lib/$1",
    "^@constants/(.*)$": "<rootDir>/constants/$1",
    "^@utils/(.*)$": "<rootDir>/utils/$1",
    "^@store/(.*)$": "<rootDir>/store/$1",
    "^@mocks/(.*)$": "<rootDir>/mocks/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
