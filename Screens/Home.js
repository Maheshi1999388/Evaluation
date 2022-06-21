import { View, Text, TouchableOpacity,TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 



const Home = () => { 

  const navigation = useNavigation();

  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Services')}>
          <Text>This is a Home screen</Text>
      </TouchableOpacity> 

      

    </View>
     
  );
};

export default Home;
