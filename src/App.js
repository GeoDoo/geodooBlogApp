import {
  StackNavigator,
} from 'react-navigation';

import MainScreen from './components/MainScreen';
import SinglePost from './components/SinglePost';

const App = StackNavigator({
  Main: {
    screen: MainScreen
  },
  SinglePost: {
    screen: SinglePost
  }
});

export default App