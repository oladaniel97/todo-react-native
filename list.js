import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function List() {
    const [todo, setTodo] = useState([]);
    useEffect(
        ()=>{
            async function getdata(){
                try {
                    const item =await AsyncStorage.getItem('todo');
                    if(item !== null) {setTodo(JSON.parse(item));}
                } catch (error) {
                    console.log(error)
                }
            } getdata()
        },[]
    )

    const Delete= async(key)=>{
        try {
            await AsyncStorage.removeItem(key)
            setTodo(todo.filter((item)=>item.key!==key))
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <View style={styles.container}>
      <FlatList
      data={todo}
      renderItem={({item})=>(
        <View style={styles.list}>
            <Text style={styles.text}>{item.name}</Text>
            <TouchableOpacity onPress={()=>{Delete(item.key)}} activeOpacity={0.5} >
                <Text ><AntDesign name="delete" size={36} color="teal" /></Text>
            </TouchableOpacity>
        </View>
        
  )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        
        flex:1,
        marginTop:10
    },
    delete:{
        padding:7,
        backgroundColor:'tomato',
        borderRadius:10,
        borderColor:'gray',
        fontSize:20,
        color:'lightgray'
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        flex:1

    },
    list:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10,
        marginHorizontal:15,
        borderBottomWidth:1,
        paddingBottom:5

    }
})