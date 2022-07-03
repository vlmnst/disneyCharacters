import { useDispatch, useSelector } from "react-redux";
import React, {useRef, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import { getAllCharacters } from "../../Reducers";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';


const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = () => {
    
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getAllCharacters())}, [dispatch]);

  const entries = useSelector((state) => state.ALL_CHARACTERS.allItemFiltered);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  const renderItem = ({item}, parallaxProps) => {
    
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.imageUrl}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goForward}>
        <Text>go to next slide</Text>
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), 
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});