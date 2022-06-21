import { View, Text,TouchableOpacity,Button,StyleSheet,Image,card, TextInput,ScrollView} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 
import AppButton from '../Components/AppButton';

const Req_Lab_report = () => { 

    const navigation = useNavigation();

    const [Reference_Number,setReference_Number] =React.useState("");
    const [Passcode,setPasscode] =React.useState("");
  
    return (
      <ScrollView>
    

            <Text>Request Chamal Medicare Lab Report</Text>
            <Text></Text>
            <Text>Check your lab reports here
               You can check Lab reports of chamal medicare laboratories by
               simply entering the "Lab Reference Number" and "Passcode"
              Printed on the bill        
              
            </Text>

            <Text></Text>

    <TouchableOpacity style={styles.card1} >


        
          <Text style={styles.cardText}>Lab Refference Number</Text> 
          <TextInput
         onChangeText={setReference_Number}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={Reference_Number}
      />

            
<Text style={styles.cardText}>Passcode(Printed on Bill)</Text> 
          <TextInput
         onChangeText={setPasscode}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={Passcode}
      />

<Text></Text>
<AppButton style={styles.getbutton}
             title="Get Lab Report" onPress={()=>navigation.navigate('Req_Lab_report') }
            
/> 

      </TouchableOpacity>
      
      <Text></Text>

        
            </ScrollView>

);
};
            
            const styles = StyleSheet.create({
             
              container:{
                flex:1,
                padding:20,
                alignItems:'center',
                justifyContent:'center',
                color: 'black',
            
              },
              card1:{
                backgroundColor: '#DBECFF',
                marginBottom:10,
                marginLeft: '2%',
                width:'90%',
                height: '90%',
                shadowColor: '#000',
                shadowOpacity: 0.2,
                shadowRadius: 1,
              },
              getbutton:{
                alignItems: 'flex-end',
              },
           
            
            
            });
      
  export default Req_Lab_report;