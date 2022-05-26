import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import { useEffect, useState, Fragment } from 'react';
import RestaurantCard from './src/components/RestaurantCard';
import styles from './src/styles/index';


const image = {uri: 'https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_1280.jpg'}

export default function App() {
  const [allRestaurants, setAllRestaurants] = useState()
  useEffect(() => { 
    const getData = async () => {
      try {
        const response = await fetch('https://my-first-firestore-na.web.app/restaurants/')
        const data = await response.json()
        setAllRestaurants(data)
      } catch (err) {
        console.error(err)
      }
    }

    getData()

  }, []) 
  return (

    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
      <ImageBackground resizeMode='cover' source={image} style={styles.container}>
      <ScrollView >
      {!allRestaurants ? <ActivityIndicator size='large' color={'#ff7373'}  /> //if not all restaurants 
      : (allRestaurants?.map(singleRest => (
        <RestaurantCard key={singleRest.id} singleRest={singleRest} />
      ))
      )}
      </ScrollView>
      <Text>Now I'm hungry!!</Text>
      <StatusBar style="auto" />
    </ImageBackground>
    </SafeAreaView>
    </View>
  );
}

