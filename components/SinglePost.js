import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import HTMLView from 'react-native-htmlview';

class SinglePost extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.post.title.rendered}`,
  });

  render() {
    console.log(this.props.navigation.state.params.post)
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default SinglePost;