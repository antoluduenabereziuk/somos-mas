const express = require('express');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(express.json());
app.use("/",router);
// routes
app.use("/", router);
app.use("/auth", require("./Routes/auth"));

app.listen(PORT, () => {
    console.log(`server running on port: ${ PORT }`)
});

