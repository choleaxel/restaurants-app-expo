import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './src/styles/index';


const image = {uri: 'https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_1280.jpg'}

const Stack = createNativeStackNavigator()

export default function App() {

    return (
    <NavigationContainer>
      <View style={styles.container}>
          <ImageBackground resizeMode='cover' source={image} style={styles.container}>
            <SafeAreaView style={styles.container}>
              <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
              </Stack.Navigator>
            </SafeAreaView>
            <StatusBar style="auto" />
          </ImageBackground>
      </View>
    </NavigationContainer>
  );
}

