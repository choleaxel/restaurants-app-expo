import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
    const [allRestaurants, setAllRestaurants] = useState();

    useEffect(() => {
        fetch('https://my-first-firestore-bc.web.app/restaurants/')
        .then(res => res.json())
        .then(setAllRestaurants)
        .catch(console.error)
    }, [])
    return (
        <ScrollView>
            {!allRestaurants
                ? <ActivityIndicator size='large' color={'#ff7373'}  /> //if not all restaurants 
                : allRestaurants?.map(singleRest => (
                <TouchableOpacity key={singleRest.id} 
                    onPress={() => navigation.navigate('Details')}>    
                    <RestaurantCard singleRest={singleRest} />
                </TouchableOpacity>
                ))
            }
        </ScrollView> 
        )}