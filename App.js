import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

export default function App() {

  const [data,setData] = useState([
    {'title' : "Make tea","key" : '1'},
    {'title' : "Make Breakfast","key" : '2'},
    {'title' : "Call Home","key" : '3'},
    {'title' : "Leetcode","key" : '4'},
    {'title' : "Flash","key" : '5'},
  ]);

  const touchHandler = (key) => {
    setData((prevData) => {
      return prevData.filter(item => item.key != key)
    })
  }

  const addTodo = (title) => {
    
    if(title.length <= 3) {
      Alert.alert("Oops","Todo needs to be more that 3 chars long",[{text : "Understood"}]);
      return; 
    }

    setData((prevData) => {
       return [
        ...prevData,
         {'title' : title , key : Math.random().toString()}
       ]
    })
  }

  return (
    <TouchableWithoutFeedback onPress = { () => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          <TodoForm addItem = {addTodo} />
          <View style={styles.list}>
            <FlatList 
              data = {data}
              renderItem = {({item}) => (
                  <TodoItem item={item} touchHandler={touchHandler} />
              )}/>
          </View>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content : {
    flex : 1,
    margin : 40,
    padding : 24
  },
  list : {
    flex : 1,
    margin : 20
  }
});
