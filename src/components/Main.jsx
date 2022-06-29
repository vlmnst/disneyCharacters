import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Db from "./db.jsx";
import Constants from 'expo-constants';


const Main = () => {
  return (
    <View style={{flex: 0}} > 
      <Db />
    </View>
  );
};


export default Main;
