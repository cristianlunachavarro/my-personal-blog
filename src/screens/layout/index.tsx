import React, { ReactNode, FC, useContext } from "react";

import styles from "./styles";

import NavBar from "../navBar";
import Error from "../error";
import Loader  from "../loader"
import { ScrollView, View } from "react-native";
import { BlogContext } from "../../context/blog";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isLoading }  = useContext(BlogContext)
  return (
    <View style={styles.container}>
      <NavBar />
      <ScrollView>
        <View style={styles.content}>{children}</View>
      </ScrollView>
      <Loader isLoading={isLoading} />
      <Error />
    </View>
  );
};

export default Layout;
