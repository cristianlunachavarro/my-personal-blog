import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Blogs from "../blogs";
import Login from "../login";
import Register from "../register";
import CreateBlog from "../createBlog";
import Blog from "../blog";
import CreateArticle from "../createArticle";
import useAuthentication from "../../hooks/useAuthentication";

const Main = () => {
  const Stack = createStackNavigator();
  const { isAuthenticated } = useAuthentication();

  return (
    <Stack.Navigator>
      {!isAuthenticated ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      ) : (
        <>
          <Stack.Screen name="Blogs" component={Blogs} />
          <Stack.Screen name="Blog">
            {({ route }) => <Blog blogId={route.params?.blogId} />}
          </Stack.Screen>
          <Stack.Screen name="Create New Blog" component={CreateBlog} />
          <Stack.Screen name="Create New Article" component={CreateArticle} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Main;
