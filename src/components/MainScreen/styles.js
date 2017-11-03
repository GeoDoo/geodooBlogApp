import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontFamily: 'AdventPro-Regular',
    fontSize: 22,
    color: '#777777',
    fontWeight: 'normal',
    marginLeft: 20
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5fcff'
  },
  recentPostsTitle: {
    fontFamily: 'AdventPro-Regular',
    textAlign: 'left',
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  },
  innerPadding: {
    // alignItems: 'center'
  },
  listItem: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 13,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'left'
  },
  date: {
    textAlign: 'right',
    fontSize: 11,
    fontStyle: 'italic'
  },
  icon: {
    padding: 15,
    fontSize: 24,
    color: '#dd9933'
  },
  marginTop: {
    marginTop: 20,
    alignItems: 'center'
  },
  listItemWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1
  },
  touchableOpacity: {
    flex: 4,
    flexDirection: 'row',    
  }
})

export default styles