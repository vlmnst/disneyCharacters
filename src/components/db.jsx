import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import { View } from "react-native";
import data from "../../data.json";
import DbItem from "./dbitem";

const Db = () => {
  return (

    <FlatList 
      numColumns={3}
      contentContainerStyle={styles.list}
      data={data}
      renderItem={({ item: repo }) => (
        <View >
        <DbItem  { ...repo} />
        </View>
        
      )}
    />
  );
};
const styles = StyleSheet.create({
    list:{
      // overflow:"hidden",
      borderRadius:12,
      borderWidth:12,
      borderColor: "#FF5733",
      flexDirection:"column",
      alignItems: "center",
    }
  });

export default Db;
