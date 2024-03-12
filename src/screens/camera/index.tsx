import React, { FC } from "react";
import { Button } from "react-native-paper";

import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";

import styles from "./styles";

import Slider from "../slider";
import { View } from "react-native";

interface CamperaProps {
  uriPhoto: string[] | [];
  setUriPhoto: (uri: string[]) => void;
}

const CameraComponent: FC<CamperaProps> = ({ uriPhoto, setUriPhoto }) => {
  const handleSelectImage = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });

      if (!result.canceled) {
        const uri = result.assets[0].uri;
        setUriPhoto((prevState) => [...prevState, uri]);
        return;
      }
    }
    console.error("Permission to access camera denied");
  };

  const handleTakePhoto = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });

      if (!result.canceled) {
        const uri = result.assets[0].uri;
        setUriPhoto((prevState) => [...prevState, uri]);
        return;
      }
    }
    console.error("Permission to access camera denied");
  };
  return (
    <>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} onPress={handleSelectImage}>
          <>Select Image</>
        </Button>
        <Button style={styles.button} onPress={handleTakePhoto}>
          <>Take Photo</>
        </Button>
      </View>
      <Slider images={uriPhoto} />
    </>
  );
};

export default CameraComponent;
