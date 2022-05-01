process.env.GULU_EXTENSIONS = '.ts,.js,.json,.node';

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  verbose: true,
  silent: false,
  forceExit: true,
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
  testRegex: '/.*test/.+.(test|spec).(ts|js)$',
  preset: 'ts-jest',
};
