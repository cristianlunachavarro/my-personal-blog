import React, { ReactNode } from "react";

import NavBar from "../navBar";
import { View } from "react-native";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <View>
      <NavBar />
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
};

export default Layout;
