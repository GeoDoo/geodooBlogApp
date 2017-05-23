import React, { Component } from 'react';
import {
  StyleSheet,
  Linking,
  ActivityIndicator,
  Text,
  View
} from 'react-native';

import api from '../utils/api';

export default class MainScreen extends Component {
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
    return this.state.posts.map(post => {
      return <Text key={post.id} onPress={() => Linking.openURL(post.link)}>{post.title.rendered}</Text>
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
    const postsList = this._renderPostsList();  

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to my blog!</Text>
        <View style={styles.postsList}>
          {postsList}
        </View>
        <ActivityIndicator
          animating={this.state.animating}
          style={[styles.centering, {height: 80}]}
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
  }
});