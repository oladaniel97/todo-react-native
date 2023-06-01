import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Form from './form'
import List from './list'

export default function Todo() {
    const [value,setValue]=useState('')
    const [todo,setTodo]=useState([])
  return (
    <View style={styles.body}>
      <View style={styles.head}>
        <Text style={styles.text}>Personal Todo-List</Text>
      </View>
      <Form value={value} setValue={setValue} todo={todo} setTodo={setTodo}/>
      <List todo={todo} setTodo={setTodo}/>
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'skyblue',
        
        
    },
    head:{
        backgroundColor:'lightblue',
        paddingTop:30
    },
    text:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        fontFamily:'',
        width:'100%',
        paddingBottom:10,
        
        borderBottomWidth:2
    }
})