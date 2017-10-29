import React, { Component } from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import PostsListItem from './PostsListItem'
import styles from './styles'

class PostsList extends Component {
	renderDate(date) {
    return moment(date).format('MMM DD')
  }

  renderPostsList() {
    const { navigate, posts } = this.props
    const onPressFunc = () => navigate('SinglePost', {post})
    return posts.map(post => {
      return (
        <PostsListItem 
        	key={post.id}
        	post={post}
        	onPress={onPressFunc}
        />
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