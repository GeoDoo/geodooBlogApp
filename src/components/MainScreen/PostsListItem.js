import React, { Component } from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import styles from './styles'

const renderDate = (date) => moment(date).format('MMM DD')

const PostsListItem = ({ post, onPress }) => (
	<View>
    <Text style={styles.listItem} onPress={onPress}>
      {post.title.rendered}
      <Text style={styles.date}>{renderDate(post.date)}</Text>
    </Text>
  </View>
)

export default PostsListItem