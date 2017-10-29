import React, { Component } from 'react'
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import SiteInfo from './SiteInfo'
import PostsList from './PostsList'
import styles from './styles'
import api from '../../utils/api'

class MainScreen extends Component {
  state = {
    posts: [],
    animating: true,
  }

  static navigationOptions = {
    title: 'Geodoo Work',
    headerTitleStyle: {
      color: "#dd9933",
      marginLeft: 20
    },
    headerLeft: <Icon name="bars" style={styles.icon} />,
    headerRight: <Icon name="search" style={styles.icon} />
  }

  _getPostsFromApi() {
    api.fetchPosts()
      .then((json) => {
        this.setState({
          posts: json,
          animating: !this.state.animating
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  componentDidMount() {
    this._getPostsFromApi()
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          { 
            !this.state.animating 
            && 
            <View>
              <SiteInfo />
              <PostsList 
                posts={this.state.posts}
                navigation={this.props.navigation}
              />
              <View style={styles.marginTop}>
                <Button title="Load more" onPress={() => {}} color="#dd9933" />
              </View>
            </View>
          }
          <ActivityIndicator
            animating={this.state.animating}
            size="large"
          />
        </ScrollView>
      </View>
    )
  }
}

export default MainScreen