import mocks from 'react-native-jest-mocks'

mocks.initAll();

fetch = jest.fn(() => new Promise(resolve => resolve()));