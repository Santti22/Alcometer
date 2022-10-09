import {StyleSheet,  Text, Switch, View } from 'react-native';
import { useState } from 'react';
import style from './styles.js'

import Calculate from './calculate';

export default function App() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
      <View style={style.containerLight}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          />
          <Text>Alcometer</Text>
          <Calculate/>
       </View>
    
  );
}