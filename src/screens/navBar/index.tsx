import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Drawer } from "react-native-paper";

import { UserContext } from "../../context/user/UserContext";

import styles from "./styles";

const NavBar = () => {
  const navigation = useNavigation();

  const { logoutUser } = useContext(UserContext);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleToggleWrapper = () => {
    setShowDrawer(!showDrawer);
  };

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.navContainer}>
        <Text>Trip Blog</Text>
        <TouchableOpacity onPress={handleToggleWrapper}>
          <Text>O</Text>
        </TouchableOpacity>
      </View>
      {showDrawer && (
        <View style={styles.drawer}>
          <Drawer.Item
            onPress={() => navigation.navigate("Blog" as never)}
            style={styles.drawerItem}
            label="Blog"
            active={showDrawer}
          />
          <Drawer.Item
            style={styles.drawerItem}
            label="Create New Blog"
            active={showDrawer}
            onPress={() => navigation.navigate("Create New Blog" as never)}
          />
          <Drawer.Item
            style={styles.drawerItem}
            label="Logout"
            active={showDrawer}
            onPress={() => handleLogout()}
          />
        </View>
      )}
    </View>
  );
};

export default NavBar;
