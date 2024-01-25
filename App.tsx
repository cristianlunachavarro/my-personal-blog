import React from "react";
import Main from "./src/screens/main";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./src/context/user/UserProvider";
import { MD2LightTheme, PaperProvider } from "react-native-paper";

const App: React.FC = () => {
  const theme = {
    // Extend Material Design 2 theme

    ...MD2LightTheme, // or MD2DarkTheme

    // Specify a custom property
    myOwnProperty: true,

    // Specify a custom nested property
    colors: {
      ...MD2LightTheme.colors,
      myOwnColor: "#BADA55",
    },
  };

  return (
    <NavigationContainer>
      <UserProvider>
        <PaperProvider theme={theme}>
          <Main />
        </PaperProvider>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
