import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight:'bold',
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 11,
        color:'#FFFFFF'
    },
    blue: {
        color: 'black'
    },
    big: {
        fontSize: 20
    },
    small: {
        fontSize: 10
    }
})

export default function StyledText({ blue, bold, children, big, small}) {
 const textStyles = [
    styles.text,
    blue && styles.blue,
    big && styles.big,
    small && styles.small,
    bold && styles.bold
 ]
    return(
        <Text style={textStyles}> {children} </Text>
    )
}