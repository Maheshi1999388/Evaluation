import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { View, StyleSheet, Platform } from 'react-native';
;

function AppTextInput({Icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {Icon && <FontAwesome name={Icon} size={22} color={Colors.primary } style={styles.IconStyles}/>}
            <TextInput style={styles.textStyles} {...otherProps}/>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Appbackground,
        flexDirection: "row",
        padding: 4,
        borderRadius: 25,
        width: '100%',
        marginVertical: 15,
        borderColor: Colors.primary,
        borderWidth: 2
    },
    textStyles: {
        fontSize: 16,
        color: Colors.dark,
        fontFamily: Platform.OS ==="android" ? "Roboto" : "Avenir"
    },
    IconStyles: {
        marginRight: 18,
        padding:6,
        left:2
    }
}) 

export default AppTextInput; 