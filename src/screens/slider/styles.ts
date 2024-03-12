import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  slide: {
    width: width,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    height: 200,
    justifyContent: "center",
    resizeMode: "cover",
  },
});

export default styles;
