import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  passwordContainer: {
    display: "flex",
    justifyContent: "center",
  },
  toggleButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 25,
  },
  toggleImage: {
    position: "absolute",
    resizeMode: "contain",
    width: 30,
    height: 30,
  },
  error: {
    textAlign: "center",
    color: "red",
  },
});

export default styles;
