module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!src/main.jsx',
    '!src/reportWebVitals.js',
    '!src/**/*.test.{js,jsx}',
    '!src/tests/**',
    '!src/demo/**',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx}',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/tests/__mocks__/fileMock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(reactflow|@reactflow|dagre)/)',
  ],
};
