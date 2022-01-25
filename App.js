import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import TotalPayable from './components/TotalPayable';

const App = () => {
  const [items, setItems] = useState([
    {date: '2022-01-22', description: 'movie', amount: 1206, paid_by: 'you'},
    {date: '2022-01-11', description: 'lunch', amount: 355, paid_by: 'Raj'},
    {
      date: '2022-01-05',
      description: 'Shopping',
      amount: 786,
      paid_by: 'Shreya',
    },
    {date: '2021-12-21', description: 'movie', amount: 840, paid_by: 'jacob'},
    {date: '2021-11-22', description: 'movie', amount: 930, paid_by: 'you'},
    {date: '2021-11-11', description: 'movie', amount: 1200, paid_by: 'Shreya'},
    {date: '2021-10-23', description: 'movie', amount: 176, paid_by: 'you'},
    {date: '2021-09-02', description: 'dinner', amount: 490, paid_by: 'jacob'},
    {
      date: '2020-03-03',
      description: 'date night',
      amount: 1587,
      paid_by: 'you',
    },
  ]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <TotalPayable />
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem item={item}></ListItem>
          )}
          style={{marginTop: 20, width: 350}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default App;
