import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localResturants=[
    {
    name:"Beachside Bar",
    image_url:'https://i.imgur.com/q0C2Rq2.jpg',
    catergories:['Cafe', 'Bar'],
    price: '₹.50',
    reviews: 1244,
    rating: 4.5,
    },
    {
    name:"Bimalesh Hotel ",
    image_url:'https://i.imgur.com/yZIVgn2.jpg',
    catergories:['Food', 'Non-Veg'],
    price: '₹.150',
    reviews: 982,
    rating: 4.3,
    },
    {
    name:"Navin Food House ",
    image_url:'https://i.imgur.com/uJCEIKc.jpg',
    catergories:['Veg', 'Fast Food'],
    price: '₹. 150',
    reviews: 1544,
    rating: 4.9,
    },
    {
    name:"Rangila Dhaba ",
    image_url:'https://i.imgur.com/NH0PbRR.jpg',
    catergories:['Drink', 'Desserts'],
    price: '₹. 289',
    reviews: 244,
    rating: 4.2,
    },
    {
    name:"Samsad Dhaba ",
    image_url:'https://i.imgur.com/O8Fkr1Y.jpg',
    catergories:['Veg', 'Fast Food'],
    price: '₹. 250',
    reviews: 462,
    rating: 3.9,
    },
    
]


const ResturantItem = ({navigation, ...props}) => {
  return (
    <>
        {props.resturantData.map((resturant, index)=>(
            <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}
            key= {index}
            onPress={()=>navigation.navigate('ResturantDetails',{
              name: resturant.name,
              image: resturant.image_url,
              price: resturant.price,
              reviews: resturant.review_count,
              rating: resturant.rating,
              categories: resturant.categories
            })}
          >
        <View style={{marginTop:10, padding:15, backgroundColor:'white'}}>
            <ResturantImage image={resturant.image_url}/>
            <ResturantInfo name={resturant.name} rating={resturant.rating} />
        </View>
        </TouchableOpacity>
        ))}
    </>
    
  )
}

export default ResturantItem

const styles = StyleSheet.create({})

const ResturantImage=(props)=>(
   <>
     <Image source={{uri:props.image}} 
        style={{width: '100%', height: 220}}
     />
     <TouchableOpacity style={{position:'absolute', right:20,marginTop:20}}>
        <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
     </TouchableOpacity>
   </>
)

const ResturantInfo=(props)=>(
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center',
    marginTop:10}}>
        <View>
            <Text style={{fontSize:15, fontWeight:'bold',color:'black'}}>{props.name}</Text>
            <Text style={{fontSize:13}}>30-40 mins</Text>
        </View>
        <View style={{backgroundColor:'#eee', height:25,width:25,alignItems:'center',borderRadius:15}}>
        <Text style={{fontWeight:'bold',color:'black'}}>{props.rating}</Text>
        </View>
    </View>
)