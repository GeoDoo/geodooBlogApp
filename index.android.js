/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image, 
  Linking,
  Text,
  View
} from 'react-native';

export default class GeodooBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  _renderPostsList() {
    // console.log(this.state.posts)
    return this.state.posts.map(post => {
      console.log(post)
      return <Text key={post.id} onPress={() => Linking.openURL(post.link)}>{post.title.rendered}</Text>
    });
  }

  _getPostsFromApiAsync() {
    return fetch('http://geodoo.work/wp-json/wp/v2/posts')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          posts: json
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
    let pic = 'http://geodoo.work/wp-content/uploads/2017/01/favicon.png';
    const postsList = this._renderPostsList();  

    return (
      <View style={styles.container}>
        <Image source={{uri:pic}} style={{width: 16, height: 16}} />
        <Text>This is the test app for the geodoo.work blog!</Text>
        {postsList}
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
  }
});

AppRegistry.registerComponent('GeodooBlog', () => GeodooBlog);
