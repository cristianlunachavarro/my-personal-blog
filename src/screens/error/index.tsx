import React, { useContext, useEffect, useState } from "react";
import { Text, View, Animated } from "react-native";
import { BlogContext } from "../../context/blog"; 
import styles from "./styles";

const Error = () => {
  const { error, setBlogError } = useContext(BlogContext);
  const [visible, setVisible] = useState(false);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    if (error) {
      setVisible(true);

      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 500, 
          useNativeDriver: true,
        }
      ).start();

      const timer = setTimeout(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }
        ).start(() => {
          setVisible(false);
          setBlogError("");
        });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error, setBlogError, fadeAnim]);

  return (
    visible && (
      <Animated.View
        style={{
          ...styles.errorContainer,
          opacity: fadeAnim,
        }}
      >
        <Text style={styles.text}>{error}</Text>
      </Animated.View>
    )
  );
};

export default Error;
