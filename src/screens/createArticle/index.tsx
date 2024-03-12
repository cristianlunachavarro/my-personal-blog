import React, { useContext, useState } from "react";
import { TextInput, Text, Button } from "react-native-paper";
import { View } from "react-native";

import { BlogContext } from "../../context/blog";
import CameraComponent from "../camera";

import Layout from "../layout";

import styles from "./styles"

const CreateArticle = () => {
  const { createArticle, blog } = useContext(BlogContext);

  const [uriPhoto, setUriPhoto] = useState<string[]>([]);
  const [articleTitle, setArticleTitle] = useState<string>("");
  const [articleText, setArticleText] = useState<string>("");

  const [error, setError] = useState<Object>({
    error: false,
    message: "",
  });

  const validateEmptyInputs = articleText.length > 0 && articleTitle.length > 0;

  const handleArticleTitle = (text: string) => {
    setArticleTitle(text);
  };

  const handleArticleText = (text: string) => {
    setArticleText(text);
  };

  const handleSubmit = () => {
    if (!validateEmptyInputs) {
      setError({ error: true, message: "Some input/s are empty" });
      return;
    }
    
    const article = {
      title: articleTitle,
      text: articleText,
      images: uriPhoto,
    };
    
    createArticle(blog._id, article);

    setArticleTitle("");
    setArticleText("");
    setUriPhoto([]);
    setError({ error: false, message: "" });
  };

  return (
    <Layout>
      <View>
        <TextInput
          label="Article Title"
          value={articleTitle}
          onChangeText={handleArticleTitle}
          style={styles.textInput}
        />
        <TextInput
          label="Article Title"
          value={articleText}
          onChangeText={handleArticleText}
          style={styles.textInput}
        />
      </View>
      {error?.error && <Text>{error.message}</Text>}
      <CameraComponent uriPhoto={uriPhoto} setUriPhoto={setUriPhoto} />
      <Button onPress={handleSubmit}>Submit</Button>
    </Layout>
  );
};

export default CreateArticle;
