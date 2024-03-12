import { StyleSheet } from "react-native";

import GlobalStyles from "../../styles";

const colors = GlobalStyles;

const styles = StyleSheet.create({
  errorContainer: {
    width: "80%",
    backgroundColor: colors.red,
    borderRadius: 4,
    alignSelf: "center",
    alignContent: "center",
    marginBottom: 10
  },
  text: {
    alignSelf: "center",
    fontWeight: '700',
    color: colors.white,
  },
});

export default styles;
