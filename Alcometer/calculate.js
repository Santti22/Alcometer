import { Text, View, Button, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import RadioForm from 'react-native-simple-radio-button';
import style from './styles.js'


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

    
    if ((weight == 0 || weight < 0) || (count == 0 || count < 0) || hours < 0) {
        result = 0
    }
    
    function printing() {

        if (weight == 0 || weight < 0) {
          const createAlert = () =>
            Alert.alert(
              "Incorrect weight",
              "Enter a valid weight before calculating!",
              [
                {
                  text: "Ok",
                  onPress: () => console.log("Cancel Pressed"),
                }
              ]
            );
        createAlert;
        setWeight(0);
        }
        return result
    }

    function clear () {
        setWeight(0)
        setHours(0)
        setCount(0)
    }
    return (
        <View>
            <Text style={style.text}>Weight</Text>
            <TextInput value={weight} keyboardType="decimal-pad" onChangeText={weight => setWeight(weight)}></TextInput>
            <Text>Bottles:</Text>
            <Text style={style.group}>
                <Button style={style.smallButton} onPress={decrementCount}>-</Button>
                <Text>{count}</Text>
                <Button style={style.smallButton} onPress={incrementCount}>+</Button>
            </Text>
            <Text>Hours:</Text>
            <Text style={style.group}>
                <Button style={style.smallButton} onPress={decrementHours}> - </Button>
                <Text>{hours}</Text>
                <Button style={style.smallButton} onPress={incrementHours}>+</Button>
            </Text>
            <RadioForm 
                radio_props={options}
                initial={0}
                onPress={(value)=> checked = setChecked(value)}
            />
            <Text style={style.result}>{result.toFixed(2)}</Text>
            <Button style={style.bigButton} onPress={printing} title="Calculate"></Button>
            <Button style={style.bigButton} onPress={clear} title="Clear"></Button>
        </View>
  );

}