import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Image source={{uri: 'https://media-exp1.licdn.com/dms/image/C5603AQHT_EW5MhDSlQ/profile-displayphoto-shrink_200_200/0/1625237115144?e=1648684800&v=beta&t=jVMrTrS8rYU6ixPppaA8sNMg47hYIiamFYGceNIej3A'}} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
      <Icon name='search' size={20} style={styles.searchIcon} />
      <Icon name='ellipsis-v' size={20} style={styles.menuIcon} />
    </View>
  );
};

Header.defaultProps = {
  title: 'Gagan Chittoria'
}

const styles = StyleSheet.create({
  image:{
    height: 30,
    width:30,
    borderRadius: 50,
  },
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'white',
    flexDirection:'row',
    alignItems:'center'

  },
  text: {
    paddingLeft:15,
    color: 'black',
    fontSize: 23,
    fontWeight:'bold'
  },
  searchIcon:{
    paddingLeft: 100,
    color: '#555',
  },
  menuIcon:{
    paddingLeft: 20,
    paddingTop: 5,
    color: '#555',
  },
});

export default Header;
