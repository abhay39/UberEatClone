import { View, Text,Image, StatusBar } from 'react-native'
import React from 'react'


export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  
  return (
    <View>
      <RestaurantImage image={image}/>
      <ResturantName name={name} />
      <ResturantDescription description={description} />
    </View>
  )
}
const RestaurantImage=(props)=>(
    <Image source={{uri:props.image}} style={{width:'100%', height:150}} />
)
const ResturantName=(props)=>(
    <Text style={{
        fontSize:29,
        fontWeight:'bold',
        marginTop:10,
        marginHorizontal:15,
        color: 'black',
    }}>{props.name}</Text>
)
const ResturantDescription=(props)=>(
    <Text style={{
        marginTop:10,
        marginHorizontal:15,
        fontWeight:'500',
        fontSize:15.5,
        color:'black',
    }}>{props.description}</Text>
)