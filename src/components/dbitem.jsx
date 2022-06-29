import React from "react";
import { Text,View, StyleSheet, Image ,Button, Touchable} from "react-native";
import { TouchableHighlight } from "react-native";
import StyledText from "./StyledText";

const DbItem = (props) => {
    return (
        <View key={props.id} style={styles.container} >
            <StyledText bold blue> {props.name}</StyledText>
            <Image style={styles.image} source={{ uri: props.imageUrl }} />
            <TouchableHighlight ><Text>eliminar</Text></TouchableHighlight>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        width:100,
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
        alignItems:"center",
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4,
        overflow: "hidden"
    },
    btn:{
        height:200,
    }
})
export default DbItem