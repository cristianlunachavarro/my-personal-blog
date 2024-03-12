import React, { useEffect, useRef } from "react";
import { View, Animated, Easing, StyleSheet } from "react-native";

import styles from "./styles";

const Loader = ({ isLoading }: { isLoading: boolean }) => {
  const scaleValue = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.easeInOut,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 0.5,
          duration: 1000,
          easing: Easing.easeInOut,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleValue]);

  return (
    isLoading && (
      <View style={styles.loaderContainer}>
        <Animated.View
          style={[styles.loader, { transform: [{ scale: scaleValue }] }]}
        />
      </View>
    )
  );
};

export default Loader;
