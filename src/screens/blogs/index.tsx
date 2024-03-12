import React, { useContext, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native"; // Importa TouchableOpacity
import { useNavigation } from "@react-navigation/native";

import { BlogContext } from "../../context/blog";
import { Blog } from "../../interfaces/blog";

import CreateBlog from "../createBlog/index";
import Layout from "../layout";
import Slider from "../slider";

import styles from "./styles";
import { UserContext } from "../../context/user";

const Blogs = () => {
  const navigation = useNavigation();
  const { blogs, getBlogs, blog } = useContext(BlogContext);
  const { user } = useContext(UserContext);

  const userId = user._id;

  useEffect(() => {
    try {
      getBlogs(userId);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  }, [userId, blog]);

  return (
    <>
      {blogs.length === 0 ? (
        <CreateBlog />
      ) : (
        <Layout>
          {blogs.map((blog: Blog) => {
            const { articles } = blog;
            return (
              <TouchableOpacity
                key={blog._id}
                style={styles.blogContainer}
                onPress={() =>
                  navigation.navigate("Blog", { blogId: blog._id })
                }
              >
                {articles && articles[0] && (
                  <View>
                    <Text style={styles.title}>{blog.title}</Text>
                    <View key={articles[0]._id} style={styles.articleContainer}>
                      <View>
                        <Text style={styles.ArticleTitle}>
                          {articles[0].title}
                        </Text>
                        <Slider images={articles[0].images} />
                        <Text
                          style={styles.ArticleDescription}
                        >{`${articles[0].text?.slice(0, 205)}...`}</Text>
                      </View>
                    </View>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </Layout>
      )}
    </>
  );
};

export default Blogs;
