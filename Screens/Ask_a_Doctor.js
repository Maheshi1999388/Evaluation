import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicon from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AppButton from '../Components/AppButton';

const Ask_a_Doctor = () => {

  const navigation = useNavigation();

  return (
    <ScrollView>

      <View style={styles.container}>
        <Text></Text>
        <Text >Specialization</Text>
        <View style={styles.inputboxcontainer}>

          <Ionicon name="medkit-outline" size={30} />
          <TextInput style={styles.inputbox}
          />

        </View>
        <Text >Doctor Name</Text>
        <View style={styles.inputboxcontainer}>

          <FontAwesome name="user-md" size={30} />
          <TextInput style={styles.inputbox}
          />
        </View>
        <Text >Date</Text>
        <View style={styles.inputboxcontainer}>

          <Ionicon name="today-outline" size={30} />
          <TextInput style={styles.inputbox} placeholder="yyyy-mm-dd"
          />

        </View>
        <Text >Charges</Text>
        <View style={styles.inputboxcontainer}>

          <Ionicon name="card-outline" size={30} />
          <TextInput style={styles.inputbox} placeholder="Rs.1500"
          />

        </View>
        <Text >First Name</Text>
        <View style={styles.inputboxcontainer}>

          <Ionicon name="person-outline" size={30} />
          <TextInput style={styles.inputbox}
          />

        </View>
        <Text >Last Name</Text>
        <View style={styles.inputboxcontainer}>

          <Ionicon name="person-outline" size={30} />
          <TextInput style={styles.inputbox}
          />

        </View>
        <Text >Date of Birth</Text>
        <View style={styles.inputboxcontainer}>

          <Ionicon name="today-outline" size={30} />
          <TextInput style={styles.inputbox}
          />

        </View>
        <Text >Mobile Number</Text>
        <View style={styles.inputboxcontainer}>

          <Ionicon name="call-outline" size={30} />
          <TextInput style={styles.inputbox}
          />

        </View>
        <Text >Email</Text>
        <View style={styles.inputboxcontainer}>

          <Ionicon name="mail-outline" size={30} />
          <TextInput style={styles.inputbox} placeholder="malshi@gmail.com"
          />

        </View>
        <Text >Address</Text>
        <View style={styles.inputboxcontainer}>

          <Ionicon name="location-outline" size={30} />
          <TextInput style={styles.inputbox}
          />

        </View>

      </View>

      <AppButton
        title="Continue" onPress={() => navigation.navigate('Payment')}
      //title="Continue" onPress={alert("success!")}
      />
    </ScrollView>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  inputboxcontainer: {

    alignItems: 'center',
    flexDirection: 'row',


    borderWidth: 2,
    borderColor: 'skyblue',
    margin: 20,
    textAlign: 'center',
    //backgroundColor: Colors.Appbackground,
    flexDirection: "row",
    padding: 4,
    borderRadius: 13,
    width: '90%',
    marginVertical: 15,
    borderColor: 'skyblue',
    paddingHorizontal: 10,


  },
  inputbox: {
    marginHorizontal: 10,
  }
},
);

export default Ask_a_Doctor;