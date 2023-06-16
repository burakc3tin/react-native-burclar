import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Result from './Pages/Result';
import SplashScreen from "react-native-splash-screen"; //import SplashScreen


const Stack = createNativeStackNavigator();
 
export default function App() {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: "transparent",
    }
  }

  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen 
        options={{
          headerStyle:{backgroundColor:'#4942E4'},
          headerTitleStyle:{color:'white'},
          title:"📅 Doğum Tarihinizi Giriniz",headerTitleAlign:'center'}}
        name="Home" component={Home} />
        <Stack.Screen name="Result"
        options={{
          headerStyle:{backgroundColor:'#4942E4'},
          headerTitleStyle:{color:'white'},
          title:"📜 Burç Özellikleri",headerTitleAlign:'center'}}
        component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}