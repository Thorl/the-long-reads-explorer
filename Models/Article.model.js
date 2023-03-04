const { Schema, model } = require("mongoose");

const articleModel = new Schema({
  title: { type: String, required: true, trim: true },
  intro: { type: String, required: true, trim: true },
  date: { type: String, required: true, trim: true },
  url: { type: String, required: true, trim: true, unique: true },
});

const Article = model("Company", articleModel);

module.exports = Article;
