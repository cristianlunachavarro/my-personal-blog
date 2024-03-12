import { StyleSheet } from "react-native";

import GlobalStyles from "../../styles";

const colors = GlobalStyles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
  },
  content: {
    top: 25,
    padding: 20,
    flex: 1,
    marginTop: 10

  },
});

export default styles;
