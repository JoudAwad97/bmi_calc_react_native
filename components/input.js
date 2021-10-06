import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = ({value, setValue, type, placeholder, name}) => {
  // define the type of the placeholder
  let unit;
  if (name === 'weight') {
    if (type === 'SI') {
      unit = 'KG';
    } else {
      unit = 'LB';
    }
  } else {
    if (type === 'SI') {
      unit = 'CM';
    } else {
      unit = 'IN';
    }
  }

  return (
    <View style={styles.input}>
      <TextInput
        placeholder={`Enter your ${placeholder} in "${unit}"`}
        onChangeText={text => setValue(text)}
        value={value}
        keyboardType={'numeric'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    color: '#000',
  },
});

export default Input;
