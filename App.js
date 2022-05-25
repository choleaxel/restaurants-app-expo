import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useState } from 'react';

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
      {allRestaurants?.map((singleRest) => {
        return <Text>{singleRest.name}</Text>
      })}
      <Text>Now I'm hungry!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
