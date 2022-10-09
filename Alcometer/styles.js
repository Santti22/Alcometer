import { StyleSheet } from "react-native";
export default function style() {
    
    const style = StyleSheet.create({
        containerLight: {
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#6804CD',
          width: '100%',
          height: 30,
        },
        containerDark: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#6804CD',
            width: '100%',
            height: 30,
            color: 'black',
          },
        text: {
          color: '#ffffff',
          fontWeight: 'bold',
        },
      });

      return style
}