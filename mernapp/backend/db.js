import mongoose from 'mongoose';

const url = 'mongodb://127.0.0.1:27017/GoFood'

const connect_to_database = async () => {

    mongoose.connect(url)

    const connect = mongoose.connection

    connect.on('open', async function () {
        console.log("connected");
        try {
            const fetched_data = await mongoose.connection.db.collection("food_items")
            const a = await fetched_data.find({}).toArray()
            global.food_items = a
            // console.log({ food_items: a })
            try {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                const fc = await foodCategory.find({}).toArray()
                global.foodCategory = fc
                // console.log({ foodCategory: fc })

            } catch (error) {
                console.log(error)
            }
        } catch (err) {
            console.log(err)
        }

    })
}



export default connect_to_database;






