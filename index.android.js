import {
  AppRegistry,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import MainScreen from './src/components/MainScreen';
import SinglePost from './src/components/SinglePost';

const GeodooBlog = StackNavigator({
  Main: {
    screen: MainScreen
  },
  SinglePost: {
    screen: SinglePost
  }
});

AppRegistry.registerComponent('GeodooBlog', () => GeodooBlog);