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
  }

  render() {
    let img = 'http://geodoo.work/wp-content/uploads/2016/12/reactjs.png';
    const postsList = this._renderPostsList();  

    return (
      <View style={styles.container}>
        <Text style={styles.recentPostsTitle}>Recent Posts</Text>
        <ScrollView>
          <View style={styles.innerPadding}>
            {postsList}
          </View>
        </ScrollView>
        <ActivityIndicator
          animating={this.state.animating}
          size="large"
        />
      </View>
    );
  }
}

export default MainScreen;