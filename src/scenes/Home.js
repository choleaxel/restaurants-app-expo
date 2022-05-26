import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { ScrollView, ActivityIndicator } from "react-native";

export default function Home() {
    const [allRestaurants, setAllRestaurants] = useState();

    useEffect(() => {
        fetch('https://my-first-firestore-bc.web.app/restaurants/')
        .then(res.res.json())
        .then(setAllRestaurants)
        .catch(console.error)
    }, [])
    return (
        <ScrollView>
            {!allRestaurants
                ? <ActivityIndicator size='large' color={'#ff7373'}  /> //if not all restaurants 
                : allRestaurants?.map(singleRest => (
                <RestaurantCard key={singleRest.id} singleRest={singleRest} />
                ))
                }
                </ScrollView> )}