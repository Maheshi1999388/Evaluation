import * as React from "react"
import { Image, ImageBackground, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import LOGO from '../assets/img/Hospital_Logo.png';
import LOGO_NAME from '../assets/img/BrandName.png';


const Welcome = () => {
    const navigation = useNavigation(); 

    return (
      <View style={styles.container}>
      
          <TouchableOpacity onPress={()=>navigation.navigate('Services')}>
        
              <Image source={LOGO} style={styles.img_1}/>

          </TouchableOpacity> 

          <Image source={LOGO_NAME} style={styles.img_2}/>
      

      </View>
  );
}; 


export default Welcome;

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#578CCA',
    justifyContent: 'center',
    alignItems: 'center',
  },
    titleText:{
      fontFamily: 'RhodiumLibre-Regular',
      fontSize:48,
    },

    mediumText: {
      fontFamily: 'RhodiumLibre-Regular',
      fontSize:24,
    },

    img_1: {
      flex: 0,
      resizeMode: 'cover',
      width: 135,
      height: 182,
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 100,
    },

    img_2: {
      flex: 0,
      resizeMode: 'cover',
      width: 145,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 120,
    }
});