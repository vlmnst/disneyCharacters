import React from "react";
import { Text,View, StyleSheet, Image ,Button, Touchable} from "react-native";
import { TouchableHighlight } from "react-native";
import StyledText from "./StyledText";

const DbItem = (props) => {
    return (
        <View 
        key={props.id} 
        style={styles.container}>
            <View style={styles.element} >
            <Image style={styles.image} source={{ uri: props.imageUrl }} />
            <StyledText style={styles.title}> {props.name}</StyledText>
            </View>
            
            
            <TouchableHighlight >
                <View style={styles.btn}>
                    <Text>Ingresar</Text>
                </View>
            </TouchableHighlight>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        marginTop:10,
        width:100,
        alignItems:"center",
        
    },
    element:{
        borderRadius:6,
        borderWidth:2,
        width:90,
        height:90,
        backgroundColor:"#F0B27A",

    },
    image: {
        width: 86,
        height: 50,
        borderRadius: 4,
        overflow: "hidden"
    },
    title:{
        alignSelf:"center", 
        width: 90,
        color: "#566573",
        fontStyle:"verdana"
    },
    btn:{
        margin:5,
        backgroundColor: "#CCCCFF",
        borderRadius:6,
        borderWidth:2,
        borderColor:"#CCFFFF",
    }
})
export default DbItem