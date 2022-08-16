import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();


const PORT = 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/book_management').then(() => {
    console.log('Connect success!')
}).catch(e => {
    console.log(e);
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
