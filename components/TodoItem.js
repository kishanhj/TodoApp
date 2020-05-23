import React from "react"
import {  StyleSheet, Text,TouchableOpacity, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'; 

export default function TodoItem({item,touchHandler}){
    return (
        <TouchableOpacity onPress = {() => touchHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons style={styles.icon} name="delete" size={22} color="#333" />
                <Text >{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item : {
        borderStyle : "dashed",
        borderRadius : 5,
        borderWidth : 1,
        padding : 20,
        margin : 8,
        flexDirection : "row"
    },
    icon : {
        marginRight : 10
    }
});