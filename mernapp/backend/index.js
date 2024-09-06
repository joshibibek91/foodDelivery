import express from 'express'

import connect_to_database from './db.js';

import createuser from './Routes/Createuser.js';

import displaydata from './Routes/DisplayData.js'




connect_to_database()

const app = express()


const port = 5000

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})


app.use(express.json())
app.use('/api', createuser)
app.use('/api', displaydata)
// app.use('/api', require("./Routes/Createuser.js"))
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});



