import mongoose from 'mongoose';
import { Schema } from 'mongoose';



const FoodItemSchema = new Schema({
    CategoryName: {
        type: String,
        required: true
    },
    img: {
        type: Image,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    // date: {
    //     type: Date,
    //     default: Date.now
    // },
})

const foodItem = mongoose.model('FoodItem', FoodItemSchema)
export default foodItem
