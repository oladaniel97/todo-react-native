import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import shortid from 'shortid';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Form({value,setValue,todo,setTodo}) {

    const change=(val)=>{
        setValue(val);
    }

    const OnSubmit = async(value)=>{
        try {
            if(value != ''){
                const newTodo = [{name:value,key:shortid.generate()},...todo,]
                await AsyncStorage.setItem('todo',JSON.stringify(newTodo));
                setTodo(newTodo);
                setValue('');
            }else{
                Alert.alert('Oops!','please enter a word or sentence',[{text:'Understood'}])
            }
        } catch (error) {
            Alert.alert('Oops!','An error occurred while saving the to-do item.',[{text:'Understood'}])
        }
        Keyboard.dismiss()
    }
  return (
    <View style={styles.form}>
        <View>
            <TextInput style={styles.input} placeholder='Write something ...' onChangeText={change} value={value}/>
        </View>
      
      <TouchableOpacity onPress={()=>OnSubmit(value)} activeOpacity={0.5} >
        <Text style={styles.submit}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    form:{
        
        backgroundColor:'skyblue',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginTop:20,
        marginHorizontal:15

    },
    submit:{
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:'teal',
        borderRadius:5,
        borderColor:'gray',
        fontSize:20,
        borderWidth:1,
        color:'white'
    },
    input:{
        width:300,
        borderRadius:5,
        padding:10,
        borderColor:'gray',
        textAlign:'center',
        fontSize:20,
        borderWidth:1,
        backgroundColor:'white'
    }


})