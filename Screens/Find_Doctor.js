import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button,Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import AppButton from '../Components/AppButton';


const Find_Doctor = () => {

    const navigation = useNavigation();

    

    return (
        <ScrollView>
            
            <Text></Text>

            <TouchableOpacity style={styles.card1} >
                <Text style={styles.cardText}>Profile</Text>
                <Text></Text>

                <Image style={styles.cardImage} source={require('../assets/img/request.png')} />
                <Text></Text>
                <Text>Name: D.M.M.K. Dissanayake</Text>
                <Text>Ms Medicine MBBS</Text>
                <Text>Experience: 10+ years</Text>


                <Text></Text>
                <AppButton
              //title="Continue" onPress={ContinuePressed}
              title="Book Appoinment" onPress={() => navigation.navigate('Channel_a_Doctor')}

              />
               <Text></Text>
               
               <Text></Text>
               <Text style={styles.cardText}>Profile</Text>
                <Image style={styles.cardImage} source={require('../assets/img/request.png')} />
                <Text></Text>
                <Text>Name: A.L.Perera</Text>
                <Text>Ms Medicine MBBS</Text>
                <Text>Experience: 10+ years</Text>


                <Text></Text>
                <AppButton
              //title="Continue" onPress={ContinuePressed}
              title="Book Appoinment" onPress={() => navigation.navigate('Channel_a_Doctor')}

              />
                
                <View>
 
          
        </View>
               
            </TouchableOpacity>

            <Text></Text>


        </ScrollView>


    );
};
const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',

    },
    card1: {
        backgroundColor: '#DBECFF',
        marginBottom: 10,
        marginLeft: '5%',
        width: '90%',
        height: '90%',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 1,

    },
    cardText:{
        textAlign: 'center',
        fontSize: 20
    },
    cardImage: {
        width: '30%',
        height: 50,
        resizeMode: 'cover',
        alignItems: 'center',
        marginLeft: 190,
        marginTop: 10,
    
    
      },



});

export default Find_Doctor;