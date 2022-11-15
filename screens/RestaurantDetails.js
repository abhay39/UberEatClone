import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/screens/resturantDetails/About'
import { Divider } from 'react-native-elements'
import MenuItems from '../components/screens/resturantDetails/MenuItems'
import ViewCart from '../components/screens/resturantDetails/ViewCart'

export default function RestaurantDetails({route, navigation}) {
  return (
    <View style={{flex:1,}}>
      <About route={route} />
      <Divider width={1.8} style={{marginVertical:20}} />
      <MenuItems resturantName={route.params.name} />
      <ViewCart navigation={navigation} resturantName={route.params.name}  />
    </View>
  )
}