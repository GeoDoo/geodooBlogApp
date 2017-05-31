import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  ActivityIndicator,
  Text,
  View
} from 'react-native';
import api from '../utils/api';

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      animating: true,
    };
  }

  static navigationOptions = {
    title: 'Geodoo Work',
  };

  _renderPostsList() {
    const { navigate } = this.props.navigation;
    return this.state.posts.map(post => {
      return <Text key={post.id} onPress={() => navigate('SinglePost', {post: post})}>{post.title.rendered}</Text>
    });
  }

  _getPostsFromApiAsync() {
    api.fetchPosts()
    .then((json) => {
      this.setState({
        posts: json,
        animating: !this.state.animating
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount() {
    this._getPostsFromApiAsync();
  }

  render() {
    let img = 'http://geodoo.work/wp-content/uploads/2016/12/reactjs.png';
    const postsList = this._renderPostsList();  

    return (
      <View style={styles.container}>
        <Image 
          style={{width: 120, height: 120}}
          source={{uri: img}} />
        <View style={styles.postsList}>
          <Text style={styles.welcome}>Welcome to my blog!</Text>
            {postsList}
        </View>
        <ActivityIndicator
          animating={this.state.animating}
          size="large"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  postsList: {
    margin: 'auto',
    width: '80%'
  },
  listItem: {
    marginBottom: 30
  }
});

export default MainScreen;