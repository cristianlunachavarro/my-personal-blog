import { StyleSheet } from "react-native";

import GlobalStyles from "../../styles";

const colors = GlobalStyles;

const styles = StyleSheet.create({
  drawerContainer: {
    position: "absolute",
    width: "100%",
  },
  navContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: colors.coolGray,
    borderBottomWidth: 5,
    borderColor: colors.lightViolet,
    borderStyle: "solid",
    color: colors.white,
  },
  drawer: {
    marginTop: 10,
  },
  drawerItem: {
    color: colors.white,
    width: "40%",
  },
});

export default styles;
