import React, { Component } from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import styles from './styles'

class PostsList extends Component {
	renderDate(date) {
    return moment(date).format('MMM DD')
  }

  renderPostsList() {
    const { navigate, posts } = this.props
    return posts.map(post => {
      return (
        <View key={post.id}>
          <Text style={styles.listItem} onPress={() => navigate('SinglePost', {post})}>
            {post.title.rendered}
            <Text style={styles.date}>{this.renderDate(post.date)}</Text>
          </Text>
        </View>
      )
    })
  }

	render() {
    return (
      <View style={styles.innerPadding}>
      	{this.renderPostsList()}
      </View>
    )
	}
}

export default PostsList