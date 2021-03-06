import { Document, model, Schema } from "mongoose";
import { SchemaDef } from "../../types";

// Declare model interface
interface ProductDoc extends App.Product, Document { }

const productSchemaDef: SchemaDef<App.Product> = {
  name: {
    type: String,
    required: true
  },
  barcode: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  }
};

// Define model schema
const productSchema = new Schema(productSchemaDef);

export default model<ProductDoc>("Product", productSchema);
