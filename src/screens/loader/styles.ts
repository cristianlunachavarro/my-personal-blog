import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1002,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  loader: {
    borderWidth: 8,
    borderColor: "#f3f3f3",
    borderTopWidth: 8,
    borderTopColor: "rgb(170, 41, 239)",
    borderRadius: 50,
    width: 50,
    height: 50,
  },
});

export default styles;
