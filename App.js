import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Image } from 'react-native';
import { useEffect } from 'react';
import { useState } from 'react';
import { ImageBackground } from 'react-native';

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
      <ImageBackground resizeMode='cover' source={image} style={styles.container}>
      <ScrollView >
      {allRestaurants ? (allRestaurants?.map(singleRest => (
        <>
         <Text style={styles.restaurantsName} 
         key={singleRest.id}> {singleRest.name}
         </Text>
         <Image 
         source={{uri: singleRest.image }}
         style={{ width: '100%', height: 100 }}
         />
        </>
      ))
      ) : (
      <ActivityIndicator size='large' color={'#ff7373'}  />
      )}
      </ScrollView>
      <Text>Now I'm hungry!!</Text>
      <StatusBar style="auto" />
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  restaurantsName: {
    color: 'brown',
    fontSize: 28,
    marginVertical: 80
  },
 
});
