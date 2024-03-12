import { StyleSheet } from "react-native";

import GlobalStyles from "../../styles";

const colors = GlobalStyles;

const styles = StyleSheet.create({
  drawerContainer: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  navContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 5,
    backgroundColor: colors.coolGray,
    borderColor: colors.lightViolet,
    borderStyle: "solid",
    color: colors.white,
  },
  blogTitle: {
    fontWeight: '700',
  },
  drawer: {
    marginTop: 10,
  },
  drawerItem: {
    backgroundColor: colors.coolGray,
    color: colors.white,
    width: "40%",
  },
  blogDrawerItem: {
    marginLeft: 20,
  },
  selectedItem: {
    backgroundColor: colors.lightViolet,
  },
  notSelected: {
    backgroundColor: colors.coolGray,
  },
});

export default styles;
