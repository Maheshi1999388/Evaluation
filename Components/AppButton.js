import React from 'react';
import { View, StyleSheet,Text, TouchableOpacity} from 'react-native';


function AppButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>   
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    
    button: {
        backgroundColor:'#578CCA',
        borderRadius: 18,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 12,
        width: '50%',
        marginVertical:10
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
});

export default AppButton;