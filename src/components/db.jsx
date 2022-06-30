import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList, StyleSheet,View  } from "react-native";
import { getAllCharacters } from "../../Reducers";
import DbItem from "./dbitem";
// import json from "../../data.json"

const Db = () => {
  
  
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getAllCharacters()) }, [dispatch]);
  let databruto = useSelector((state) => state.ALL_CHARACTERS.allItemFiltered);
  let data=databruto.data
  // data = data.data.slice(0,24);
  // console.log(data)
  // console.log(json)

  return (

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
