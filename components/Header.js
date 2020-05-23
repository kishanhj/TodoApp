import React from "react"
import { View, StyleSheet, Text } from "react-native"

export default function Header(props){
    return (
        <View style={styles.header}>
            <Text style={styles.title}> My Todo's </Text>
        </View>
    )
}

const styles = StyleSheet.create({
header : {
    height : 80,
    paddingTop : 40,
    backgroundColor : "coral"
},
title : {
    textAlign : "center",
    fontWeight : "bold",
    // color : "#fff",
    fontSize : 20
}
});