import { createContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './src/scenes/Details';
import Home from './src/scenes/Home';

//const image = {uri: 'https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_1280.jpg'}

const Stack = createNativeStackNavigator()

export const SingleRestContext = createContext(null) //creating context

export default function App() {
  const [currentRest, setCurrentRest] = useState(); //used with creating context
  return (
    <SingleRestContext.Provider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Local Restaurants'}} />
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    </SingleRestContext.Provider>
  );
}
