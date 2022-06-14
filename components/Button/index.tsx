import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native';

interface ButtonProps {
    text: string;
    onPress: () => void;
    containerStyles?: object;
}

const Button = ({text, onPress, containerStyles}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
        <Text style={[styles.textInput, containerStyles]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({

    root: {
        height: 38,
        backgroundColor: '#e47911',
        width: 330,
        marginTop: '7.5%',
        alignContent: 'center',
        borderColor: '#a15e1b'

    },
    textInput: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }

})


export default Button;