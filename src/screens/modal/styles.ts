import { StyleSheet } from "react-native";

import GlobalStyles from "../../styles";

const colors = GlobalStyles;

const styles = StyleSheet.create({
  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },

  modalContainer: {
    backgroundColor: "#fff",
    maxWidth: "80%",
    padding: 20,
    borderRadius: 8,
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1),",
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    marginVertical: 10,
    width: '40%'
  }


});

export default styles;
