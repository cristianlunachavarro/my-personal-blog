import mongoose, { Document, Types } from "mongoose";

export interface BlogType extends Document {
  _id: Types.ObjectId;
  title: string;
  userId: Types.ObjectId;
  articles: Types.DocumentArray<ArticlesType>;
}

export interface ArticlesType {
  _id?: Types.ObjectId;
  title: string;
  text?: string | null | undefined;
  images: string[];
}

const blogArticlesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String },
  images: [String], // Array de rutas a las imágenes
});

const blogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  articles: [blogArticlesSchema],
});

export const BlogModel = mongoose.model<BlogType>("Blog", blogSchema);
