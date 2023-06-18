import mongoose, { Schema } from "mongoose";

const MenuSchema = new Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  section: {
    type: String,
    require: true,
    enum: ["start", "main", "side", "drink"],
  },
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dprkaqz8q/image/upload/v1687060375/entrada-chicharron_xmnuvf.jpg",
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Menu = mongoose.model("Menu", MenuSchema);

export default Menu;
