import {
  AppRegistry,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import MainScreen from './components/MainScreen';

const GeodooBlog = StackNavigator({
  Main: {screen: MainScreen}
});

AppRegistry.registerComponent('GeodooBlog', () => GeodooBlog);