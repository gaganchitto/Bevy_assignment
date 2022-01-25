import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TotalPayable = () => {
  return (
    <View>
      <View
        style={{
          marginTop: 10,
          borderWidth: 1,
          borderColor: '#E0583E',
          width: 350,
          height: 150,
          borderRadius: 15,
          shadowColor: 'grey',
          shadowOpacity: 0.3,
          backgroundColor: '#E0583E',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#CCC',
            fontSize: 15,
            paddingBottom: 10,
          }}>
          TOTAL PAYABLE
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
            }}>
            ₹
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 40,
              paddingLeft: 3,
            }}>
            2925
          </Text>
        </View>
      </View>
      <TouchableOpacity>
      <View
        style={{
          marginTop: 20,
          width: 350,
          height: 50,
          backgroundColor: 'green',
          borderRadius: 30,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: 'grey',
          shadowOpacity: 0.3,
        }}>
        <Text
          style={{
            color: 'white',
          }}>
          Settle Up
        </Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default TotalPayable;
