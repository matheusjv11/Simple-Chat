module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    modulePaths: [
      "<rootDir>",
    ],
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
      "\\.(css|less)$": "<rootDir>/mocks/fileMock.js"
    }
  }