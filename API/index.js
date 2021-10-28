const express = require("express");

// Connection
const sequelize = require("./Connection/sequelize")

// routes
const authRoute = require("./Routes/auth")
const router = express.Router();

const PORT = process.env.PORT || 3306


const app = express()

app.use(express.urlencoded({extended: false})); 
app.use(express.json());

app.get("/",(req,res)=>console.log("estoy funcionando"))
app.use("/", router);
app.listen(PORT, (req,res) => {

    console.log(`server running on port: ${ PORT }`)
    // try{
    //     sequelize.authenticate()
    //     .then(console.log('Connection has been established successfully.'))
    // } catch (error) {
    //     console.error('Unable to connect to the database:', error);
    // }
})

// routes
app.use("/auth",require("./Routes/auth"));



module.exports = app