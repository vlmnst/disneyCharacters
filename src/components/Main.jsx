import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Db from "./db.jsx";
import Constants from 'expo-constants';

const Main = () => {
  return (
    <View style={styles.container} > 
    <Text> Disney Characters </Text>
      <Db />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
  });

export default Main;
