import { StyleSheet } from "react-native";

import GlobalStyles from "../../styles";

const colors = GlobalStyles;

const styles = StyleSheet.create({
  articleContainer: {
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightViolet,
    borderBottomStyle: "solid",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: colors.shipGray,
  },
  description: {
    paddingBottom: 5,
    textAlign: "justify",
  },
  deleteContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
  textInput: {
    borderRadius: 8,
    paddingHorizontal: 15, 
    paddingVertical: 0,   
  },
  slider: {
    marginBottom: 10,
    marginTop: 10
  }
});

export default styles;
