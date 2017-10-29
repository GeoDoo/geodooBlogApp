import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import _ from 'underscore'
import moment from 'moment'
import styles from './styles'

const renderDate = (date) => moment(date).format('MMM DD')

const PostsListItem = ({ post, onPress }) => (
	<View style={styles.listItemWrapper}>
		<TouchableOpacity 
			style={styles.touchableOpacity}
			onPress={onPress}
		>
			<View style={{flex: 3}}>
		    <Text style={styles.listItem}>
		      {post.title.rendered}
		    </Text>
			</View>
			<View style={{flex: 1, alignSelf: 'center'}}>
	    	<Text style={styles.date}>{renderDate(post.date)}</Text>
			</View>
		</TouchableOpacity>
	</View>
)

export default PostsListItem