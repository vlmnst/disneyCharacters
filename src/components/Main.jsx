import React from "react";
import Constants from 'expo-constants'
import { Text, View } from "react-native";
import Db from './db.jsx'

const Main = () => {
    return(
        <View style={{
            flexDirection: "row"
          }}>
            <Text>Title 
             <Db/>   
            </Text>
            
        </View>
    )
}

export default Main