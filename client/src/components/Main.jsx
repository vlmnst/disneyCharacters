import React from "react";
import { Text, View } from "react-native";
import Db from './db.jsx'
import Nav from "./Nav.jsx";
import Landing from "./landing";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const Main = () => {
    return (
        <NavigationContainer  >
            <Stack.Navigator>
                <Stack.Screen
                name = 'Disney Characters'
                component= { Landing }
                />
                <Stack.Screen
                name = 'List'
                component = { Db }
                /> 
            </Stack.Navigator>
        </NavigationContainer >
    )
}


export default Main