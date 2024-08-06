import type { Config } from 'jest';

export default {
  displayName: 'transloco-schematics',
  testEnvironment: 'node',
  globals: {},
  transform: {
    '^.+.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/?!(.\\*.mjs$|replace-in-file)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/transloco-schematics',
  preset: '../../jest.preset.js',
} as Config;
