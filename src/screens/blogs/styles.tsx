import { StyleSheet } from "react-native";

import GlobalStyles from "../../styles";

const colors = GlobalStyles;

const styles = StyleSheet.create({
  blogContainer: {
    marginTop: 10,
  },
  title: {
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 20,
    color: colors.slateGray,
    textAlign: "center",
  },

  articleContainer: {
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightViolet,
    borderBottomStyle: "solid",
  },
  ArticleTitle: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.shipGray,
  },
  ArticleDescription: {
    paddingBottom: 5,
    paddingTop: 15,
    textAlign: "justify",
  },
});

export default styles;
