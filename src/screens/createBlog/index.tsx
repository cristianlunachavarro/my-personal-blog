import React, { useContext, useState } from "react";
import { View } from "react-native";

import { TextInput, Text, Button } from "react-native-paper";

import CameraComponent from "../camera";
import Layout from "../layout";

import { BlogContext } from "../../context/blog";
import { UserContext } from "../../context/user";

import styles from "./styles";

const CreateBlog = () => {
  const { createBlog, blogs } = useContext(BlogContext);
  const { user } = useContext(UserContext);

  const [blogTitle, setBlogTitle] = useState<string>("");
  const [articleTitle, setArticleTitle] = useState<string>("");
  const [articletext, setArticleText] = useState<string>("");
  const [uriPhoto, setUriPhoto] = useState<string[]>([]);
  const [error, setError] = useState<Object>({
    error: true,
    message: "",
  });

  const handleBlogTitle = (text: string) => {
    setBlogTitle(text);
  };

  const handleArticleTitle = (text: string) => {
    setArticleTitle(text);
  };

  const handleArticleText = (text: string) => {
    setArticleText(text);
  };

  const handleSubmit = () => {
    if (blogTitle.length === 0) {
      setError({
        error: true,
        message: "Blog Title is required",
      });
      return;
    }
    const article = {
      title: articleTitle,
      text: articletext,
      uriPhoto: uriPhoto,
    };
    createBlog(blogTitle, article, user._id);
  };

  return (
    <Layout>
      <View>
        <TextInput
          label="Blog Title"
          value={blogTitle}
          onChangeText={handleBlogTitle}
          style={styles.textInput}
        />
        <TextInput
          label="Article Title"
          value={articleTitle}
          onChangeText={handleArticleTitle}
          style={styles.textInput}
        />
        <TextInput
          label="Article Text"
          value={articletext}
          onChangeText={handleArticleText}
          style={styles.textInput}
        />
        <CameraComponent uriPhoto={uriPhoto} setUriPhoto={setUriPhoto} />
        <Button onPress={handleSubmit}>Submit</Button>
      </View>
    </Layout>
  );
};

export default CreateBlog;
