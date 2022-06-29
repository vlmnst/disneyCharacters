import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";

const DbItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <View style={styles.textCont}>
        <StyledText bold >
          {props.name}
        </StyledText>
      </View>

      <View style={styles.imgCont}>
        <Image style={styles.image} source={{ uri: props.imageUrl }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
    margin: 5,
    width: 100,
    backgroundColor: '#FBD1B0',
    borderRadius: 5,
    overflow: "hidden",
    justifyContent:'center',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
    overflow: "hidden",
  },
  imgCont: {
    flexDirection: "row",
    justifyContent: "center",
    width:100,
    marginBottom:3
  },
  textCont: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    width:100,
    marginBottom:6
  },
});
export default DbItem;
