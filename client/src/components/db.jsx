import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList, StyleSheet,View  } from "react-native";
import { getAllCharacters } from "../../Reducers";
import DbItem from "./dbitem";
import Landing from "./landing";
// import json from "../../data.json"

let a;

const Db = () => {
  
  
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getAllCharacters()) }, [dispatch]);
  let data = useSelector((state) => state.ALL_CHARACTERS.allItemFiltered);

  return (
    <View>
      <Landing/>
      <FlatList
        numColumns={3}
        contentContainerStyle={styles.list}
        data={data}
        renderItem={({ item: repo }) => (
          <View >
            <DbItem  {...repo} />
          </View>
      )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    // overflow:"hidden",
    borderWidth: 12,
    borderColor: "#78909C",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#566573",
  }
});

export default Db;
