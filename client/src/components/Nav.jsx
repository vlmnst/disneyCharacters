import React from "react";
import { Text,View, StyleSheet,TouchableHighlight} from "react-native";

const Nav = () => {
    return (
        <View style={styles.container}>
            <TouchableHighlight >
                <View >
                    <Text style={styles.btn} >Home</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight >
                <View >
                    <Text style={styles.btn} >Ingresar</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent:"space-around",
        width:"max",
        height:40,
        alignItems:"center",
        backgroundColor: "#CCFFFF",
        borderRadius:6,
        borderWidth:2,
        borderColor:"#566573",
        
    },
    btn:{
        color:"#CCFFFF",
        textAlign:"center",
        width:100,
        height:30,
        margin:1,
        backgroundColor: "#78909C",
        borderRadius:6,
        borderWidth:2,
        borderColor:"#566573",
        
    },
});

export default Nav

