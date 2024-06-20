import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import NewsScreen from "../screens/NewsScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LocationScreen from "../screens/Location";
 
const Stack = createStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registrar" component={RegisterScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Localizacao" component={LocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 