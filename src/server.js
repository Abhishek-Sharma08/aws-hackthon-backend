import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('mongoDB connected');
        
    } catch (error) {
        console.log('db connection failed');
        process.exit(1);
        
    }
}

connectDB();

app.listen(PORT,"0.0.0.0", () => {
    console.log(`server running on port ${PORT}`);
})