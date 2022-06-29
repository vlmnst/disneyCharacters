import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";

const DbItem = (props) => { 
    return (
         <View key={props.id} style={styles.container} >
          <StyledText bold blue> {props.name}</StyledText>     
           <Image style={styles.image} source={{ uri: props.imageUrl}} />
        </View>
    )
       

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4,
        overflow: "hidden"
    }
})
export default DbItem