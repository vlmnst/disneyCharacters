import { useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View,Image,Button,Text, StyleSheet } from "react-native";
import { getAllCharacters } from "../../Reducers";
import Nav from "./Nav";

const Landing = ({ navigation }) => {

    const [state,setState]= useState({
        slideIndex:0,
    })
    const dispatch = useDispatch();
    useEffect(() => { dispatch(getAllCharacters())}, [dispatch]);
    let data = useSelector((state) => state.ALL_CHARACTERS.allItemFiltered);
    let image = "https://akns-images.eonline.com/eol_images/Entire_Site/20121016/634.mm.cm.111612_copy.jpg?fit=around%7C634:1024&output-quality=90&crop=634:1024;center,top";
    let title ="Bienvenidos";
    let next = +1;
    let back = -1;
    data.length ? image =data[state.slideIndex].imageUrl:null;
    data.length ? title =data[state.slideIndex].name:null;
    // Button image controls
    function plusSlides(n) {
        if (state.slideIndex + n === -1 ){
            return setState({
                ...state,
                slideIndex: (data.length-1),
                
            });
        }
        if (state.slideIndex + n === data.length){
            return setState({
            ...state,
            slideIndex: 0,
        });
        }  
            return setState({
                ...state,
                slideIndex: (state.slideIndex) + n,
        });
    }
    // Thumbnail image controls ?cooming soon...
    function currentSlide(n) {
        setState({
            ...state,
            slideIndex: n,
    });
    }

    return (
        <View style={styles.conteiner}>
            <Nav navigation={navigation}/>
            <Text style={ styles.text }>{title}</Text>
            <Image 
                style={styles.image}
                source={{uri:image }} 
                />
            <View style={styles.subConteiner}>
                <View style={styles.btn}>
                    <Button
                    color="#f194ff"
                    title="Back"
                    onPress = {(e)=>{plusSlides(back)}}></Button>
                </View>
                <View style={styles.btn}>
                    <Button 
                    color="#f194ff"
                    title="Next"
                    onPress = {(e)=>{plusSlides(next)}}></Button>
                </View>
            </View>
            <View style={styles.subConteiner}>
                <View style={styles.btnList}>
                    <Button
                    color="#f194ff"
                    title="List Of Characters"
                    onPress = { ()=>{navigation.navigate('List')} }></Button>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
  conteiner: {
   alignItems : "center",
   backgroundColor:"#78909C",
   felx: 1
  },
  text: {
    fontSize:30,
    color:"black"
  },
  image: {
    borderRadius:40,
    width: 370, 
    height: 370 
  },
  subConteiner: {
    width: 700, 
    flexDirection:"row", 
    justifyContent:"space-around"
  },
  btn: {
    width: 100,
    padding:20
  },
  btnList: {
    width:150,
  }
})
export default Landing