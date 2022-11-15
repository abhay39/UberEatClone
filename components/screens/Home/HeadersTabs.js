import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const HeadersTabs = (props) => {
    
  return (
    <View style={{flexDirection:'row', alignSelf:'center'}}>
      <HeaderButtons text="Delivery"  btnColor="black" textColor="white" activeTabs={props.activeTabs} setActiveTabs={props.setActiveTabs}/>

      <HeaderButtons text="Pickup" btnColor="white" textColor="black" activeTabs={props.activeTabs} setActiveTabs={props.setActiveTabs}/>
    </View>
  )
}

export default HeadersTabs
const HeaderButtons=(props)=>(
    
        <TouchableOpacity style={{
            backgroundColor:props.activeTabs===props.text?"black":"white",
            paddingVertical:6,
            paddingHorizontal:16,
            borderRadius:30,
        }}
            onPress={()=>props.setActiveTabs(props.text)}
        >
            <Text style={{
                color: props.activeTabs===props.text?"white":"black",
                fontSize:15,
                fontWeight:'bold'
            }}>{props.text}</Text>
        </TouchableOpacity>
    
)

const styles = StyleSheet.create({})