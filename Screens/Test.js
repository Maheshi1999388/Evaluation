import { View, Text,TouchableOpacity,Button,StyleSheet,Image,card, TextInput,ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 
//import DatePicker from 'react-native-neat-date-picker'

const Test= () => { 

  const navigation = useNavigation(); 

  const [email,setdropdown] = React.useState("")
  
  
  return (
    <ScrollView>
      
      
      <Text></Text>
 
      <Text >drop down</Text>
      <TextInput
         onChangeText={setdropdown}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={email}
      />




    </ScrollView>
  );
};


export default Test;