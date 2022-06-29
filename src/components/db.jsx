import React from "react";
import { FlatList, StyleSheet } from "react-native";
import data from "../../data.json";
import DbItem from "./dbitem";

const Db = () => {
  return (

    <FlatList
      contentContainerStyle={styles.list}
      numColumns={3}
      extraData={data.id}
      horizontal={false}
      data={data}
      renderItem={({ item: repo }) => (
        <DbItem  { ...repo} />
      )}
    />
  );
};
const styles = StyleSheet.create({
    list: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
  });
export default Db;
