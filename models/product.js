const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
  id_product: String,
  image_path: String,
  name: String,
  url: String,
  descriere: String,
  type: String,
  age: Array,
  skin: Array,
  day: Array,
  color: Array,
});
const product = mongoose.model("product", Schema);
module.exports = product;
