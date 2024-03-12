import { StyleSheet } from "react-native";

import GlobalStyles from "../../styles";

const colors = GlobalStyles;

const styles = StyleSheet.create({
  blogContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: colors.slateGray,
    textAlign: "center",
  },
  textInput: {
    borderRadius: 8,
    paddingHorizontal: 15, 
    paddingVertical: 0,   
  }
});

export default styles;
