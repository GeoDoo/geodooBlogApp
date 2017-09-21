import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  ActivityIndicator,
  Text,
  View,
  ScrollView
} from 'react-native';
import styles from './styles';
import api from '../../utils/api';

class MainScreen extends Component {
  state = {
    posts: [],
    animating: true,
  };

  static navigationOptions = {
    title: 'Geodoo Work',
  };

  _renderPostsList() {
    const { navigate } = this.props.navigation;
    return this.state.posts.map(post => {
      return <Text style={styles.listItem} key={post.id} onPress={() => navigate('SinglePost', {post: post})}>{post.title.rendered}</Text>
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
    console.log('test console log')
  }

  render() {
    let img = 'http://geodoo.work/wp-content/uploads/2016/12/reactjs.png';
    const postsList = this._renderPostsList();  

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.recentPostsTitle}>Recent Posts</Text>
          <View style={styles.innerPadding}>
            {postsList}
          </View>
          <ActivityIndicator
            animating={this.state.animating}
            size="large"
          />
        </ScrollView>
      </View>
    );
  }
}

export default MainScreen;