import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Categories from '../components/screens/Home/Categories'
import HeaderTabs from '../components/screens/Home/HeadersTabs'
import SearchBar from '../components/screens/Home/SearchBar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ResturantItem, { localResturants } from '../components/screens/Home/ResturantItem'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/screens/Home/BottomTabs'

const YELP_API_KEY='cj-UbCSQMUKZodPtKRRhzIQzOiw5X2Wp__CTzTO9vPMKe3_l_kWGrAVZEiaGmx9KX2y0bopMO2GfI3iSA9SqGMQ7ZTnkeaCAT27f7bscxhaUVkyo4hx8bTLm0E8GY3Yx'

const Home = ({navigation}) => {
  const [resturantData, setResturantData] = useState(localResturants)
  const [city, setCity]= useState("San Francisco")
  const [activeTabs, setActiveTabs]= useState("Delivery")

  const getResturantFromYelp=()=>{
    const yelpUrl=`https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        
        setResturantData(
          json.businesses.filter((business) =>
          business.transactions.includes(activeTabs.toLowerCase())
        )
      )
    );
  }
  useEffect(()=>{
    getResturantFromYelp()
  },[city, activeTabs])
  
  return (
    <SafeAreaView style={{backgroundColor:"#eee",flex:1}}>
      <View style={{backgroundColor:"white",padding:15}}>
        <HeaderTabs activeTabs={activeTabs} setActiveTabs={setActiveTabs} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItem resturantData={resturantData} navigation={navigation} />
        
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})