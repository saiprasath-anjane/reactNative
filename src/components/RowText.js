import React from "react";
import { Feather } from '@expo/vector-icons'
import { View, Text, StyleSheet } from "react-native";

const RowText = (props) => {
    const { 
        containerStyles, 
        messageOneStyles, 
        messageOne, 
        messageTwo, 
        messageTwoStyles 
    } = props
    return (
        <View style={containerStyles}>
          <Text style={messageOneStyles}>{messageOne}</Text>
          <Text style={messageTwoStyles}>{messageTwo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default RowText