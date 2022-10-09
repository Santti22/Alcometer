import { Text, View, Button, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import RadioForm from 'react-native-simple-radio-button';
import styles from './styles.js'


export default function Calculate() {

    let [weight, setWeight] = useState(0);

    //Countit kaljan määrälle:
    let [count, setCount] = useState(0);
    
    function incrementCount() {
        count = count + 1;
        setCount(count);
    }

    function decrementCount() {
        count = count - 1;
        setCount(count);
    }

    //Tunnit siitä millon hörpitty:
    let [hours, setHours] = useState(0);
    
    function incrementHours() {
        hours = hours + 1;
        setHours(hours);
    }   
    
    function decrementHours() {
        hours = hours - 1;
        setHours(hours);
    }

    //Radiobuttonien tarkistus
    let [checked, setChecked] = useState(0.7)

    const options = [
        {label: 'Male', value: 0.7},
        {label: 'Female', value: 0.6}
    ]


    const liters = count * 0.33
    const grams = liters * 8 * 4.5; 
    const burning = weight / 10
    const gramsLeft = grams - burning * hours

    const [gender, setGender] = useState(0.7);
    const [burningWeight, setBurningWeight] = useState(0)
  
    useEffect(() => {
        setGender(checked)
    }, [checked]);

    useEffect(() => {
        setBurningWeight(weight)
    }, [weight])
    let result = gramsLeft / (burningWeight * gender);


 
    console.log(gramsLeft)
    console.log(Math.round(result) * 2)
    function printing() {
        return result
    }
    return (
        <View>
            <Text style={styles.texts}>Weight</Text>
            <TextInput value={weight} keyboardType="decimal-pad" onChangeText={weight => setWeight(weight)}></TextInput>
            <Button onPress={decrementCount}>-</Button>
            <Text>Bottles:</Text>
            <Text>{count}</Text>
            <Button onPress={incrementCount}>+</Button>
            <Button onPress={decrementHours}>-</Button>
            <Text>Hours:</Text>
            <Text>{hours}</Text>
            <Button onPress={incrementHours}>+</Button>
            <RadioForm 
                radio_props={options}
                initial={0}
                onPress={(value)=> checked = setChecked(value)}
            />
            <Text style>{result.toFixed(2)}</Text>
            <Button onPress={printing} title="Calculate"></Button>
        </View>
  );

}