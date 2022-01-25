import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = ({item, deleteItem}) => {
  const month = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
  }


  return (
    <View style={styles.listItem}>
      <View style={styles.listItemView}>
        <View style={{flexDirection:'row'}}>
          <View style={{width: 50}}>
            <Text style={styles.listItemText}>{month[item.date.slice(5,7)]}</Text>
            <Text style={{fontSize: 12, color: 'grey', marginTop: 2}}>{item.date.slice(-2)}</Text>
          </View>
          <View>
            <Text style={styles.listItemText}>{item.description}</Text>
            <Text style={{fontSize: 12, color: 'grey', marginTop: 2, textTransform:'capitalize'}}>
              Paid By {item.paid_by}
            </Text>
          </View>
        </View>
        <Text
          style={
            (styles.listItemText,
            item.paid_by == 'you' ? {color: 'green'} : {color: 'red'})
          }>
          {item.paid_by == 'you' ? '+' : '-'} ₹{item.amount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 60,
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    color: 'black',
    fontSize: 18,
    textTransform: 'capitalize',
  },
});

export default ListItem;
