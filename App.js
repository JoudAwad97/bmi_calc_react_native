import React, {useState} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// import custom input components
import Input from './components/input';
import Select from './components/select';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: Dimensions.get('window').height,
  };

  // define variable with useState
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [type, setType] = useState('SI');

  const [bmi, setBMI] = useState(null);

  // function to calculate the BMI
  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      let BMI;

      if (type === 'metric') {
        BMI = ((weight / (height * height)) * 730).toFixed(2);
      } else {
        // Fixing upto 2 decimal places
        BMI = (weight / ((height * height) / 10000)).toFixed(2);
      }

      // Dividing as per the bmi conditions
      if (BMI < 18.6) setBMI(`Under Weight : ${BMI}`);
      else if (BMI >= 18.6 && BMI < 24.9) setBMI(`Normal : ${BMI}`);
      else setBMI(`Over Weight : ${BMI}`);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text style={styles.title}>Welcome To BMI calculator</Text>

        <Select value={type} setValue={setType} />

        <Input
          placeholder="height"
          name="height"
          setValue={setHeight}
          type={type}
          height={height}
        />
        <Input
          placeholder="weight"
          name="weight"
          weight={weight}
          setValue={setWeight}
          type={type}
        />

        <Button onPress={calculateBMI} title="Calculate MY BMI" />

        <Text style={styles.bmi_text}>{bmi}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bmi_text: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 28,
    fontWeight: 'bold',
  },
  title: {
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default App;
