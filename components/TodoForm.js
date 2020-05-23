import React, { useState } from "react"
import { View, StyleSheet, TextInput, Button } from "react-native"

export default function TodoForm({addItem}){

    const [text,setText] = useState('');

    return(
        <View style = {styles.form}>
            <TextInput
            style = {styles.textField}
            onChangeText = {(val) => setText(val)} 
            placeholder="Type your Todo"/>

            <Button 
            style={styles.button}
            onPress = {() => { addItem(text)}} 
            title="Add todo" />
        </View>
    )
}

const styles = StyleSheet.create({
    form : {

    },
    textField : {
        borderBottomWidth : 1,
        // borderStyle : "solid",
        borderBottomColor: "lightblue",
        marginBottom : 10,
        height : 40
    },
    button : {
        borderWidth : 1,
        borderStyle : "solid",
        backgroundColor : 'coral'
    }
})