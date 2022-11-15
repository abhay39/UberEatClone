import { View, Text,StyleSheet,Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch } from "react-redux";

const foodsItems=[
    {
        title:'Tandori Chicken',
        description:'Tandori Chicken is a indian dish container chicken and rotis.',
        price:'₹.120',
        image:'https://i.imgur.com/lt6taXU.jpg',
    },
    {
        title:'Roasted Chicken',
        description:'Roasted Chicken is a in which chicken is fried.',
        price:'₹.150',
        image:'https://i.imgur.com/r3qOgS6.jpg',
    },
    {
        title:'Naan',
        description:'Naan is the bascially party food which is for making the mahool.',
        price:'₹.180',
        image:'https://i.imgur.com/S1WMNv3.jpg',
    },
    {
        title:'Non-Veg Thali',
        description:'Non-Veg thali contains rice, roti, chicken, salad, oniona and curd',
        price:'₹.220',
        image:'https://i.imgur.com/ZlgnTxt.jpg',
    },
    {
        title:'Fried Rice',
        description:'Fried Rice contains roasted rice with smaller pieces of chicken which is for making the rice tasty.',
        price:'₹.120',
        image:'https://i.imgur.com/NOkzf1d.jpg',
    },
]
 const styles= StyleSheet.create({
    menuItemStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin: 20,
    },
    titleStyle:{
        fontSize:19,
        fontWeight:'bold',
        color: 'black',
    }
})
export default function MenuItems({resturantName}){
    const dispatch=useDispatch();
    const selectItem = (item) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {...item, resturantName:resturantName}
    })

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {foodsItems.map((food,index)=>(
            <View key={index}>
            <View style={styles.menuItemStyle}>
                <BouncyCheckbox 
                    iconStyle={{
                        borderColor: 'lightgray',
                        borderRadius:10,
                    }}
                    fillColor='green'
                    onPress={()=> {selectItem(food)}}
                /> 
                <FoodInfo food={food} />
                <FoodImage food={food} />
            </View>
            <Divider width={0.5} orientation="vertical" style={{
                marginHorizontal:20
            }}/>
        </View>
        
        ))}
    </ScrollView>    
  )
}

const FoodInfo=(props)=>(
    <View style={{
        width: 240,
        justifyContent:'space-evenly',
    }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text >{props.food.description}</Text>
        <Text style={{color:'black'}}>{props.food.price}</Text>
    </View>
)

const FoodImage=(props)=>(
    <View>
        <Image source={{uri:props.food.image}}
        style={{
            width: 100,
            height: 100,
            borderRadius:8,
            // marginLeft:marginLeft,
        }}
        />
    </View>
)