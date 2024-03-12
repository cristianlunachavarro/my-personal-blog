import React, { FC } from "react";
import { View, Image } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";
import styles from "./styles";

interface SliderProps {
  images?: string[];
}

const Slider: FC<SliderProps> = ({ images }) => {
  return (
    <SwiperFlatList
      autoplay
      autoplayDelay={4}
      index={0}
      style={styles.sliderContainer}
    >
      {images?.map((image, index) => {
        return (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        );
      })}
    </SwiperFlatList>
  );
};

export default Slider;
