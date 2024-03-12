import React, { useContext, useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../context/user";

import eye from "../../assets/eye.png";

import Layout from "../layout";

import styles from "./styles";

const Register = () => {
  const navigation = useNavigation();

  const { registerUser, cleanError, error } = useContext(UserContext);

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [localError, setLocalError] = useState<string>("");
  const [togglePassword, setTogglePassword] = useState<boolean>(false);

  const validateEmptyFields = () => {
    if (
      username.length > 0 &&
      password.length > 0 &&
      name.length > 0 &&
      lastName.length > 0
    ) {
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

  const handleName = (text: string) => {
    setName(text);
  };

  const handleLastName = (text: string) => {
    setLastName(text);
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
      registerUser(name, lastName, username, password);
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
    <Layout>
      <TextInput
        label="Name"
        value={name}
        onChangeText={handleName}
        style={styles.textInput}
      />
      <TextInput
        label="Last name"
        value={lastName}
        onChangeText={handleLastName}
        style={styles.textInput}
      />
      <TextInput
        label="Email"
        value={username}
        onChangeText={handleUsername}
        style={styles.textInput}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          label="Password"
          value={password}
          onChangeText={handlePassword}
          secureTextEntry={!togglePassword}
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={handleTogglePassword}
        >
          <Image source={eye} style={styles.toggleImage} />
        </TouchableOpacity>
      </View>
      <Button onPress={handleSubmit}>Submit</Button>
      <Button onPress={() => navigation.navigate("Login" as never)}>
        Login
      </Button>
      {(localError || error) && (
        <Text style={styles.error}>{localError || error}</Text>
      )}
    </Layout>
  );
};

export default Register;
