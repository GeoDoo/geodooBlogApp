import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import styles from './styles';

class SinglePost extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.post.title.rendered}`,
  });

  render() {
    const {
      title,
      content
    } = this.props.navigation.state.params.post;
    return (
      <ScrollView> 
        <Text style={{fontSize:24}}>{title.rendered}</Text>
        <HTMLView value={content.rendered} />
      </ScrollView>
    );
  }
}

export default SinglePost;