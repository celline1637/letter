// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@apis/(.*)$': '<rootDir>/apis/$1',
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@constants/(.*)$': '<rootDir>/constants/$1',
    '^@hocs': '<rootDir>/hocs/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@lib/(.*)$': '<rootDir>/lib/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@stores/(.*)$': '<rootDir>/stores/$1',
    '^@styles/*': '<rootDir>/styles/$1',
    '^@theme/*': '<rootDir>/theme/$1',
    '^@types/*': '<rootDir>/types/$1',
    '^@utils/*': '<rootDir>/utils/$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
