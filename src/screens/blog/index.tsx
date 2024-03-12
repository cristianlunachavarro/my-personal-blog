import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";

import { BlogContext } from "../../context/blog/";

import Articles from "../article";
import Layout from "../layout";
import Modal from "../modal";

import styles from "./styles";
import { Article } from "../../interfaces/blog";

const DELET_BLOG_TEXT =
  "Are you sure you want to delete this blog? This action is permanent.";

const Blog = ({ blogId }) => {
  const navigation = useNavigation();

  const { blog, getBlog, deleteBlog, editBlog } = useContext(BlogContext);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [title, setEditTitle] = useState<string>("");

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleEditTitle = (text) => {
    setEditTitle(text);
  };

  const handleSelectEdit = () => {
    setIsEditing(true);
  };

  const handleSubmitTitle = () => {
    const blogId = blog._id;
    editBlog(title, blogId);
    setIsEditing(false);
    setEditTitle(" ");
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        await getBlog(blogId);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [blogId]);

  return (
    <Layout>
      {blog && (
        <View style={styles.blogContainer}>
          {!isEditing ? (
            <Text style={styles.title} onPress={handleSelectEdit}>
              {blog.title}
            </Text>
          ) : (
            <>
              <TextInput
                label="Blog Title"
                value={title}
                onChangeText={handleEditTitle}
                mode="outlined"
                style={styles.textInput}
              />
              <Button onPress={handleSubmitTitle}>Guardar</Button>
            </>
          )}
          {blog.articles?.map((article: Article, index) => (
            <Articles article={article} key={article._id} blogId={blog._id} />
          ))}
          <Button
            onPress={() => navigation.navigate("Create New Article" as never)}
          >
            Add Article
          </Button>
          <Button onPress={handleModal}>Delete this Blog</Button>
          <Modal
            text={DELET_BLOG_TEXT}
            openModal={openModal}
            value={blog._id}
            acceptFunc={deleteBlog}
            setOpenModal={setOpenModal}
          />
        </View>
      )}
    </Layout>
  );
};

export default Blog;
