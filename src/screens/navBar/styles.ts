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
    fontWeight: "700",
  },
  drawer: {
    marginTop: 10,
    marginLeft: 10
  },
  drawerItem: {
    textAlign: 'left',
    marginLeft: 0,
    marginRight: 0,
    margin: 0,
    backgroundColor: colors.coolGray,
    color: colors.white,
    width: "50%",
  },
  iconStyle: {
    margin: 0,
  },
  blogDrawerItem: {
    marginLeft: 20,
  },
  centerText: {
    textAlign: "center",
  },
  selectedItem: {
    backgroundColor: colors.lightViolet,
  },
  notSelected: {
    backgroundColor: colors.coolGray,
  },
});

export default styles;
