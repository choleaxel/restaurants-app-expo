import { useEffect, useState, useContext } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import { SingleRestContext } from "../../App";

export default function Home({ navigation }) {
    const [allRestaurants, setAllRestaurants] = useState();
    const { setCurrentRest } = useContext(SingleRestContext)

    useEffect(() => {
        fetch('https://my-first-firestore-na.web.app/restaurants/')
        .then(res => res.json())
        .then(setAllRestaurants)
        .catch(console.error)
    }, [])

    const handlePress = (singleRest) => {
        setCurrentRest(singleRest);
        navigation.navigate('Details');
    }
     
    return (
        <ScrollView>
            {!allRestaurants
                ? <ActivityIndicator size='large' color={'#ff7373'}  /> //if not all restaurants 
                : allRestaurants?.map(singleRest => (
                <TouchableOpacity key={singleRest.id} 
                    onPress={() => handlePress(singleRest)}>    
                    <RestaurantCard singleRest={singleRest} />
                </TouchableOpacity>
                ))
            }
        </ScrollView> 
        )}