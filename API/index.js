const express = require("express");

// Connection
const sequelize = require("./Connection/sequelize")

// routes
const authRoute = require("./Routes/auth")

const PORT = process.env.PORT || 5001

const app = express()

app.use(express.urlencoded({extended: false})); 
app.use(express.json())

// routes
app.use("/", authRoute)


app.listen(PORT, (req,res) => {
    console.log(`server running on port: ${ PORT }`)
    try{
        sequelize.authenticate()
        .then(console.log('Connection has been established successfully.'))
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})


module.exports = app