import React, { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  ScrollView
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import api from '../../utils/api';

class MainScreen extends Component {
  state = {
    posts: [],
    animating: true,
  };

  static navigationOptions = {
    title: 'Geodoo Work',
    headerTitleStyle: {
      color: "#dd9933",
      marginLeft: 20
    },
    headerLeft: <Icon name="gear" style={styles.icon} />,
    headerRight: <Icon name="search" style={styles.icon} />
  };

  _renderDate(date) {
    return moment(date).format('MMM DD')
  }

  _renderPostsList() {
    const { navigate } = this.props.navigation;
    return this.state.posts.map(post => {
      return (
        <View key={post.id}>
          <Text style={styles.listItem} onPress={() => navigate('SinglePost', {post})}>
            {post.title.rendered}
            <Text style={styles.date}>{this._renderDate(post.date)}</Text>
          </Text>
        </View>)
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
        <ScrollView>
          <Text style={styles.recentPostsTitle}>
            Modern Web Development and more... • A developer's journal
          </Text>
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