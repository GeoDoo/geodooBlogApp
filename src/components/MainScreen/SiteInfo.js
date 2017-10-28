import React, { Component } from 'react'
import { Text, View } from 'react-native'

import api from '../../utils/api';
import styles from './styles';

class SiteInfo extends Component {
	state = {
		siteInfo: ''
	}

	getSiteInfo() {
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

  componentDidMount() {
    this.getSiteInfo();
  }

	render() {
		return (
			<View>
				<Text style={styles.recentPostsTitle}>
	    		{this.state.siteInfo}
	  		</Text>
  		</View>
		)
	}
}

export default SiteInfo