module.exports = {
  globals: {
    window: true,
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
    'vue-jest': {
      experimentalCSSCompile: false,
    },
  },
  rootDir: '.',
  setupFiles: ['<rootDir>/src/test/setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/test/jest-dom-importer.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    'vee-validate/dist/rules': 'ts-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!vee-validate/dist/rules)',
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*', '!src/**/*.d.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/assets/',
    '/layouts/',
    '/plugins/',
    '/static/',
    '/test/',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  coverageDirectory: './coverage',
  coverageReporters: ['html', 'text', 'lcov', 'json'],
  preset: 'ts-jest',
  testMatch: null,
  testEnvironment: 'jest-environment-jsdom',
}
