import React from "react";
import { Text, View } from "react-native";
import Db from './db.jsx'
import Nav from "./Nav.jsx";
import Landing from "./landing";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from "./Login.jsx";
import Carousel from './CarruselImage'

const Stack = createNativeStackNavigator()

const Main = () => {
    return (
        <NavigationContainer  >
            <Stack.Navigator
                screenOptions={{
                    //headerShown: false
                }}>
                <Stack.Screen
                name = 'Disney Characters'
                component= { Landing }
                />
                <Stack.Screen
                name = 'List'
                component = { Db }
                /> 
                <Stack.Screen
                name = 'Login'
                component = { Login }
                />
                <Stack.Screen
                name = 'Nav'
                component = { Nav }
                />
                <Stack.Screen
                name = 'Carousel'
                component = { Carousel }
                />
            </Stack.Navigator>
        </NavigationContainer >
    )
}


export default Main