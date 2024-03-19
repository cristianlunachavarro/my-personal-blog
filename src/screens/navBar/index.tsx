import React, { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Drawer } from "react-native-paper";

import { UserContext } from "../../context/user/UserContext";
import { BlogContext } from "../../context/blog";

import tableRowIcon from "../../assets/tableRowIcon.png";

import useAuthentication from "../../hooks/useAuthentication";

import styles from "./styles";

const NavBar = () => {
  const navigation = useNavigation();

  const { blogs, blog, cleanBlog } = useContext(BlogContext);
  const { logoutUser } = useContext(UserContext);

  const { isAuthenticated } = useAuthentication();

  const [showDrawer, setShowDrawer] = useState(false);
  const [showBlogs, setShowBlogs] = useState(false);

  const handleToggleWrapper = () => {
    setShowDrawer(!showDrawer);
  };

  const handleLogout = () => {
    logoutUser();
  };

  const handleShowBlogs = () => {
    setShowBlogs(true);
  };

  const handleNavigate = (path: never, blogId = undefined) => {
    if (path !== "Blog") {
      cleanBlog();
    }

    navigation.navigate(path, { blogId });
    setShowBlogs(false);
    setShowDrawer(false)
  };

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.navContainer}>
        {isAuthenticated && (
          <TouchableOpacity onPress={handleToggleWrapper}>
            <Image source={tableRowIcon} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
        )}
        <Text
          style={styles.blogTitle}
          onPress={() => handleNavigate("Blogs" as never)}
        >
          MY BLOG
        </Text>
      </View>
      {showDrawer && (
        <View style={styles.drawer}>
          <Drawer.Item
            onPress={handleShowBlogs}
            style={styles.drawerItem}
            label="Blogs"
            active={showDrawer}
          />
          {showBlogs && blogs.length > 0 && (
            <View style={[styles.blogDrawerItem]}>
              {blogs.map((b) => {
                const isSelected = blog._id === b._id;
                return (
                  <Drawer.Item
                    key={b._id}
                    label={b.title}
                    onPress={() => {
                      handleNavigate("Blog" as never, b._id);
                    }}
                    active={showDrawer}
                    style={[
                      styles.drawerItem,
                      styles.drawer,
                      isSelected && styles.selectedItem,
                    ]}
                  />
                );
              })}
            </View>
          )}
          <Drawer.Item
            style={styles.drawerItem}
            label="Create New Blog"
            active={showDrawer}
            onPress={() => handleNavigate("Create New Blog")}
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
