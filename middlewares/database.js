import mongoose from 'mongoose';

import ProductSchema from '../model/products';

const dataBase = async () => {
  const uri = "mongodb+srv://admin:admin123@cluster0.ehwca.mongodb.net/e-com?retryWrites=true&w=majority";
  const connection = await mongoose.createConnection(
    uri,
    {
      useNewUrlParser: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useUnifiedTopology: true
    }
  );
  const Product = connection.model("products", ProductSchema);
  return {
    connection,
    models: {
      Product
    }
  };
}

export default dataBase;
