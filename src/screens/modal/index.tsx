import React from "react";
import { FC } from "react";
import { View, Text, TouchableOpacity, Modal as RNModal } from "react-native";
import { Button } from "react-native-paper";

import styles from "./styles";

interface ModalProps {
  text: string;
  openModal: boolean;
  value?: string | { blogId: string; articleId: string };
  acceptFunc: (value?: string | { blogId: string; articleId: string }) => void;
  setOpenModal: (openModal: boolean) => void;
}

const Modal: FC<ModalProps> = ({
  text,
  openModal,
  value,
  acceptFunc,
  setOpenModal,
}) => {

  const handleAcceptFunc = () => {
    const blogId = value?.blogId 
    const articleId = value?.articleId

    if (typeof value === "string") {
      acceptFunc(value);
    }
    acceptFunc(blogId, articleId)
    setOpenModal(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <RNModal
      visible={openModal}
      transparent={true}
      animationType="slide"
      //   onRequestClose={setOpenModal}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text>{text}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Button onPress={handleCloseModal}>Cerrar</Button>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Button onPress={handleAcceptFunc}>Aceptar</Button>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
