import { useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View,Image,Button,Text } from "react-native";
import { getAllCharacters } from "../../Reducers";

const Landing = () => {
    
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
        <View style={{ alignItems : "center",margin:20}}>
            <Text style={{ fontSize:30,color:"black"}}>{title}</Text>
            <Image 
                style={{ borderRadius:40,width: 600, height: 400 }}
                source={{uri:image }} 
                />
            <View style={{width: 700, flexDirection:"row", justifyContent:"space-around"}}>
                <View style={{ width: 100,padding:20}}>
                    <Button
                    color="#f194ff"
                    title="Back"
                    onPress = {(e)=>{plusSlides(back)}}></Button>
                </View>
                <View style={{ width: 100,padding:20}}>
                    <Button 
                    color="#f194ff"
                    title="Next"
                    onPress = {(e)=>{plusSlides(next)}}></Button>
                </View>
            </View>
        </View>
    )
};
export default Landing