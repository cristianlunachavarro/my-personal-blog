import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Blog from "../blog";
import Login from "../login";
import Register from "../register";
import CreateBlog from "../createBlog";

const Main = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Create New Blog" component={CreateBlog} /> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Blog" component={Blog} />
    </Stack.Navigator>
  );
};

export default Main;
