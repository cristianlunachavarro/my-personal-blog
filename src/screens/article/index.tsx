import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";

import { TextInput, Text, Button } from "react-native-paper";

import { Article as ArticleProps } from "../../interfaces/blog";
import { BlogContext } from "../../context/blog";

import Slider from "../slider";
import Modal from "../modal";

import styles from "./styles";

import deleteIcon from "../../assets/deleteIcon.png";

const LAST_ARTICLE_BLOG_ERROR = "Unable to delete the last article";
const DELETE_ARTICLE_ACEPTANCE =
  "Are you sure you want to delete this article?";

const Article = ({
  article,
  blogId,
}: {
  article: ArticleProps;
  blogId: string;
}) => {
  const { editArticle, deleteArticle, setBlogError, blog } =
    useContext(BlogContext);

  const [isEditing, setIsEditing] = useState<object>({
    title: false,
    text: false,
  });
  const [editedArticle, setEditedArticle] = useState<object>(article);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const articleId = article._id;

  const handleDeleteArticle = () => {
    if (blog.articles?.length === 1)
      return setBlogError(LAST_ARTICLE_BLOG_ERROR);
    setOpenModal(true);
  };

  const handleSelect = (input: string) => {
    setIsEditing({ [input]: true });
  };

  const handleEditArticle = (text: string, input: string) => {
    setEditedArticle((prevEditArticle) => ({
      ...prevEditArticle,
      [input]: text,
    }));
  };

  const handleSubmitEditedArticle = () => {
    editArticle(editedArticle, blogId);
    setIsEditing({ title: false, text: false });
  };

  return (
    <View key={article._id} style={styles.articleContainer}>
      <View>
        {!isEditing["title"] ? (
          <Text style={styles.title} onPress={() => handleSelect("title")}>
            {article.title}
          </Text>
        ) : (
          <>
            <TextInput
              label="Article Title"
              value={editedArticle.title}
              mode="outlined"
              style={styles.textInput}
              onChangeText={(text) => handleEditArticle(text, "title")}
            />
            <Button onPress={handleSubmitEditedArticle}>Guardar</Button>
          </>
        )}
        <View style={styles.slider}>
          <Slider images={article.images} />
        </View>
        {!isEditing["text"] ? (
          <Text style={styles.description} onPress={() => handleSelect("text")}>
            {article.text}
          </Text>
        ) : (
          <>
            <TextInput
              value={editedArticle.text}
              multiline={true}
              style={styles.textInput}
              onChangeText={(text) => handleEditArticle(text, "text")}
            />
            <Button onPress={handleSubmitEditedArticle}>Guardar</Button>
          </>
        )}

        <TouchableOpacity
          onPress={handleDeleteArticle}
          style={styles.deleteContainer}
        >
          <Button>Delete article</Button>
          <Image source={deleteIcon} style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
      <Modal
        openModal={openModal}
        text={DELETE_ARTICLE_ACEPTANCE}
        value={{ blogId, articleId }}
        setOpenModal={setOpenModal}
        acceptFunc={deleteArticle}
      />
    </View>
  );
};

export default Article;
