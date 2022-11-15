import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const items=[
    {
        image:require('../../images/shopping-bag.png'),
        text:'Pick-up',
    },
    {
        image:require('../../images/bread.png'),
        text:'Bakery Items',
    },
    {
        image:require('../../images/fast-food.png'),
        text:'Fast Food',
    },
    {
        image:require('../../images/deals.png'),
        text:'Deals',
    },
    {
        image:require('../../images/coffee.png'),
        text:'Coffee & Tea',
    },
    {
        image:require('../../images/desserts.png'),
        text:'Desserts',
    },
]

const Categories = () => {
  return (
    <View style={{marginTop:5, backgroundColor:'white', paddingVertical:10, paddingLeft:20}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Loops start here */}
      {items.map((item,index)=>(
        <View key={index} style={{alignItems:'center', marginRight:30}}>
        <Image
            source={item.image} 
            style={{width:50, height:50, resizeMode:'contain'}}
        />
        <Text style={{fontSize:13, fontWeight:'bold',color:'black'}}>{item.text}</Text>
      </View>
      ))}
      {/* Loops ends here */}
        </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})