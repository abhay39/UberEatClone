import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import RestaurantDetails from './screens/RestaurantDetails';
import {Provider as ReduxProvider} from 'react-redux'
import configureStore from './redux/store'

const Stack = createNativeStackNavigator();

const store =configureStore()

const RootNavigation = () => {
    
  return (
    <ReduxProvider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{
              headerShown: false,
          }}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="ResturantDetails" component={RestaurantDetails} />
          </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  )
}

export default RootNavigation