import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  recentPostsTitle: {
    fontFamily: 'AdventPro-Regular',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    fontSize: 20
  },
  innerPadding: {
    alignItems: 'center'
  },
  listItem: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 12,
    marginTop: 20,
    marginBottom: 20
  }
});

export default styles