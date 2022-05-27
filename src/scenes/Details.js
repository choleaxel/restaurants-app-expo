import { View, Text, Image, Button } from "react-native"
import styles from "../styles"
import { useContext } from "react"
import { SingleRestContext } from "../../App"
import { ActivityIndicator } from "react-native";



export default function Details () {
    const { currentRest } = useContext(SingleRestContext);
    const handleRating = (newRating) => {
      fetch('https://my-first-firestore-na.web.app/restaurants/$(currentRest.id)/rating',{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({rating: newRating}),
      })
      .then(res => res.json())
      .then(data => setCurrentRest(data))
      .catch(console.error)
    }
    return (
      <View style={styles.restaurantCard}>
          {!currentRest
          ? <ActivityIndicator/>
        : (
            <>
            <Image source={{ uri: currentRest.image}} 
            style={{width: '100%', height: 240}} />
            <Text style={styles.restaurantsName}>{currentRest.name}</Text>
            <Text style={styles.cuisine}>{currentRest.cuisine}</Text>
            <Text style={styles.address}>{currentRest.address}</Text>
            <Text style={[styles.address, {fontWeight: '700'}]}>Rating {currentRest.rating.toFixed(3)}</Text>
            <Text style={styles.address}>My Rating:</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', 
                paddingVertical: 24,
            }}>
                <Button onPress={() => handleRating(1)} title='⭐️'/>
                <Button onPress={() => handleRating(2)} title='⭐️'/>
                <Button onPress={() => handleRating(3)} title='⭐️'/>
                <Button onPress={() => handleRating(4)} title='⭐️'/>
                <Button onPress={() => handleRating(5)} title='⭐️'/>
            </View>
            </>
        )}
      </View>  


    )
}