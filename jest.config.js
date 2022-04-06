// eslint-disable-next-line no-undef
module.exports = {
   testEnvironment: 'jsdom',
   moduleNameMapper: {
      '\\.svg$': '<rootDir>/svgr.js',
      '@assets/(.*)$': '<rootDir>/src/assets/$1',
      '@components/(.*)$': '<rootDir>/src/components/$1',
      '@constants/(.*)$': '<rootDir>/src/constants/$1',
      '@hocs/(.*)$': '<rootDir>/src/hocs/$1',
      '@hooks/(.*)$': '<rootDir>/src/hooks/$1',
      '@layout/(.*)$': '<rootDir>/src/layout/$1',
      '@pages/(.*)$': '<rootDir>/src/pages/$1',
      '@styles/(.*)$': '<rootDir>/src/styles/$1',
      '@utils/(.*)$': '<rootDir>/src/utils/$1',
   },
   transform: {
      '\\.[jt]sx?$': 'babel-jest',
      '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
         'jest-transform-stub',
   },
   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
