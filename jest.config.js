module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
};
