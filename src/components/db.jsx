import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import { View } from "react-native-web";
import data from "../../data.json";
import DbItem from "./dbitem";

// usermauro

const Db = () => {
  return (

    <FlatList
      data={data}
      renderItem={({ item: repo }) => (
        <View style={{
            flexDirection: "row"
          }} >
        <DbItem  { ...repo} />
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });
export default Db;
