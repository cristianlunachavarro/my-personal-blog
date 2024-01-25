import React from "react";
import { Button } from "react-native-paper";

import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import { Image } from "react-native";

const CameraComponent = ({ uriPhoto, setUriPhoto }) => {
  // const handleSelectImage = async () => {
  //   const { status } = await Camera.requestCameraPermissionsAsync();

  //   if (status === "granted") {
  //     const result = await ImagePicker.launchImageLibraryAsync({
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       quality: 0.5,
  //     });

  //     if (!result.canceled) {
  //       const uri = result.assets[0].uri;
  //       setUriPhoto(uri);
  //       return;
  //     }
  //   }
  //   console.error("Permission to access camera denied");
  // };

  // console.log("uriPhoto", uriPhoto);

  // const handleTakePhoto = async () => {
  //   const { status } = await Camera.requestCameraPermissionsAsync();
  //   if (status === "granted") {
  //     const result = await ImagePicker.launchCameraAsync({
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       quality: 0.5,
  //     });

  //     if (!result.canceled) {
  //       const uri = result.assets[0].uri;
  //       setUriPhoto(uri);
  //       return;
  //     }
  //   }
  //   console.error("Permission to access camera denied");
  // };
  return (
    <>
      {/* <Button onPress={handleSelectImage}>
        <>Select Image</>
      </Button>
      <Button onPress={handleTakePhoto}>
        <>Take Photo</>
      </Button>
      {uriPhoto && (
        <Image source={{ uri: uriPhoto }} style={{ width: 200, height: 200 }} />
      )} */}
    </>
  );
};

export default CameraComponent;
