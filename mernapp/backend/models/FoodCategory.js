import mongoose from 'mongoose';
import { Schema } from 'mongoose';



const FoodCategorySchema = new Schema({
    CategoryName: {
        type: String,
        required: true
    },

    // date: {
    //     type: Date,
    //     default: Date.now
    // },
})

const foodCategory = mongoose.model('foodCategory', FoodCategorySchema)
export default foodCategory



