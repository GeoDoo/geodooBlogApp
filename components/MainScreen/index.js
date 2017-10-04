import React, { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import api from '../../utils/api';

class MainScreen extends Component {
  state = {
    siteInfo: '',
    posts: [],
    animating: true,
  };

  static navigationOptions = {
    title: 'Geodoo Work',
    headerTitleStyle: {
      color: "#dd9933",
      marginLeft: 20
    },
    headerLeft: <Icon name="bars" style={styles.icon} />,
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

  _getSiteInfo() {
    api.fetchSiteInfo()
      .then((json) => {
        this.setState({
          siteInfo: json.name + ' • ' + json.description
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _getPostsFromApi() {
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
    this._getSiteInfo();
    this._getPostsFromApi();
  }

  render() {
    const postsList = this._renderPostsList();  

    return (
      <View style={styles.container}>
        <ScrollView>
          { 
            !this.state.animating 
            && 
            <View>
              <Text style={styles.recentPostsTitle}>
                {this.state.siteInfo}
              </Text>
              <View style={styles.innerPadding}>
                {postsList}
                <Button title="Load more" onPress={() => {}} />
              </View>
            </View>
          }
          <ActivityIndicator
            animating={this.state.animating}
            size="large"
            style={styles.indicator}
          />
        </ScrollView>
      </View>
    );
  }
}

export default MainScreen;