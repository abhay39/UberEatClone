import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const BottomTabs = () => {
  return (
    <View style={{flexDirection:'row',marginHorizontal:30,margin:10, justifyContent:'space-between'}}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Search" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})
const Icon=(props)=>(
    <TouchableOpacity>
    <View>
        <FontAwesome5 name={props.icon} size={25} style={{marginBottom:3, alignSelf: 'center', color:'black'}} />
        <Text style={{color:'black'}}>{props.text}</Text>
    </View>
    </TouchableOpacity>
)