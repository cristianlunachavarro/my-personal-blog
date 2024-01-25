import React, { useContext, useState } from "react";
import { View } from "react-native";

import { TextInput, Text, Button } from "react-native-paper";

import CameraComponent from "../camera";
// import { BlogContext } from "../../context/Blog/BlogContext";

const CreateBlog = () => {
  // const { createBlog: _createBlog } = useContext(BlogContext);

  const [blogTitle, setBlogTitle] = useState<string>("");
  const [articleTitle, setArticleTitle] = useState<string>("");
  const [articletext, setArticleText] = useState<string>("");
  const [uriPhoto, setUriPhoto] = useState<string>("");
  const [error, setError] = useState<Object>({
    error: true,
    message: "",
  });

  const handleBlogTitle = (text) => {
    setBlogTitle(text);
  };

  const handleArticleTitle = (text) => {
    setArticleTitle(text);
  };

  const handleArticleText = (text) => {
    setArticleText(text);
  };

  const handleSubmit = () => {
    if (blogTitle.length === 0) {
      console.log("Blog Title is required");
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
    console.log("article", article);
    // _createBlog(blogTitle, article);
  };

  return (
    <View>
      <TextInput
        label="Blog Title"
        value={blogTitle}
        onChangeText={handleBlogTitle}
        // error={error.error}
      />
      <Text>Article</Text>
      <TextInput
        label="Article Title"
        value={articleTitle}
        onChangeText={handleArticleTitle}
      />
      <TextInput
        label="Article Text"
        value={articletext}
        onChangeText={handleArticleText}
      />
      <CameraComponent uriPhoto={uriPhoto} setUriPhoto={setUriPhoto} />
      <Button onPress={handleSubmit}>Submit</Button>
    </View>
  );
};

export default CreateBlog;
