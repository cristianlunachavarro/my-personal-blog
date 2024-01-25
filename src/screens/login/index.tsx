import React, { useState, useContext, useEffect } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import { UserContext } from "../../context/user/UserContext";

import styles from "./styles";

import eye from "../../assets/eye.png";


const Login = () => {
  const navigation = useNavigation();

  const { loginUser, cleanError, error } = useContext(UserContext);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [localError, setLocalError] = useState<string>("");
  const [togglePassword, setTogglePassword] = useState<boolean>(false);


  const validateEmptyFields = () => {
    if (username.length > 0 && password.length > 0) {
      setLocalError("");
      return true;
    }
    setLocalError("There are some empty fields");
    return false;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  const handleUsername = (text: string) => {
    if (!isValidEmail(text)) {
      setLocalError("Invalid email");
    } else {
      setLocalError("");
    }
    setUsername(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);
  };

  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  const handleSubmit = () => {
    if (validateEmptyFields()) {
      loginUser(username, password);
    }
    return;
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLocalError("");
      cleanError();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [error, localError]);

  return (
    <>
      <TextInput
        label="Username"
        value={username}
        onChangeText={handleUsername}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          label="Password"
          value={password}
          onChangeText={handlePassword}
          secureTextEntry={!togglePassword}
        />
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={handleTogglePassword}
        >
          <Image source={eye} style={styles.toggleImage} />
        </TouchableOpacity>
      </View>
      <Button onPress={handleSubmit}>Submit</Button>
      <Button onPress={() => navigation.navigate("Register" as never)}>
        Register
      </Button>
      {(localError || error) && (
        <Text style={styles.error}>{localError || error}</Text>
      )}
    </>
  );
};

export default Login;
