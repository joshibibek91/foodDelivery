import express from 'express'
import mongoose from 'mongoose'

import foodCategory from '../models/FoodCategory.js'



const router = express.Router()

router.post('/foodData', async (req, res) => {

    try {
        // const item = await mongoose.connection.db.collection("food_items").find({})
        // const item = await foodCategory.find({})


        // res.send([global.food_items, global.foodCategory])
        // res.json(item)

        res.send({ foodItems: global.food_items, foodCategory: global.foodCategory})

    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})


export default router