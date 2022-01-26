import mongoose from "mongoose";

const image = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
 })

 export const Image = mongoose.model("Image", image);