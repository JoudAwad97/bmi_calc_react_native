import React from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Select = ({value, setValue}) => {
  // define variables for the dropdown
  const [open, setOpen] = React.useState(false);

  let data = [
    {label: 'KG/CM', value: 'SI'},
    {label: 'LB/IN', value: 'metric'},
  ];

  return (
    <View style={{padding: 10, zIndex: 99999}}>
      <Text>Select measurement system</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={data}
        setOpen={setOpen}
        setValue={setValue}
        onPress={() => setOpen(!open)}
      />
    </View>
  );
};

export default Select;
