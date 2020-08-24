import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  "_id": mongoose.Schema.Types.ObjectId, 
  "id": Number, 
  "title": String, 
  "price": String, 
  "description": String, 
  "category": String, 
  "image": String,
  "name": String
});


module.exports = ProductSchema;
