const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  product_title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
});

// export model user with UserSchema
module.exports = mongoose.model("product", ProductSchema);
