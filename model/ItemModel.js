import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    
    title:{
        type:"string",
        required: [true,'Please Provide Title']
    },
    description: {
        type:"string",
        required:[true,'Please Provide Description']

    },
    status:{
        type: Boolean,
        required: [true,'Please Provide Status']
    },
    userId:{
        type:"string",
        required: [true,'Please Provide User']
    },
    images:[
        {type: String,
            required: [true,'Please Provide Images url']}
    ]

}) 
export const Product = mongoose.model("Product",ProductSchema);
