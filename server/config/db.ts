const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/myPersonalBlog")
  .catch((err: Error) => console.log(err));
