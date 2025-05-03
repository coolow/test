import express from "express";

const app = express();
app.get('/', (req, res) => {
    const data = req.headers;
    console.log(data);
    res.send(data);
})
app.listen(3000, () => {
    console.log("http://localhost:3000");
})