import React from "react";
import { Text,View, StyleSheet,TouchableHighlight, Button} from "react-native";

const Nav = ({ navigation }) => {
    return (
      
        <View style={styles.container}>
            <TouchableHighlight >
                <View >
                    <Text style={styles.btn} >Home</Text>
                </View>
            </TouchableHighlight>
       
            <View style={styles.btn}>
                    <Button
                    title = "Login"
                    onPress = { ()=>{navigation.navigate('Login')}}></Button>
                </View>
    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flexDirection:"row",
        justifyContent:"space-around",
        // width:"max", cuidado con algunas propiedades
        width: '100%' ,
        height:50,
        alignItems:"center",
        backgroundColor: "#CCFFFF",
    },
    btn:{
        color:"#CCFFFF",
        textAlign:"center",
        justifyContent: 'center',
        width:100,
        height:30,
        // margin:1,
        backgroundColor: "#78909C",
        borderRadius:6,
        
    },
});

export default Nav

