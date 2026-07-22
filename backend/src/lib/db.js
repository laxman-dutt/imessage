import mongoose from "mongoose";

export async function connectDB() {
    try {
        const mongoUri = process.env.MONGO_URI;

        if(!mongoUri) throw new Error(`Mongo Uri required.`);

        const conn = await mongoose.connect(mongoUri);

        console.log(`MongoDb Connected`,conn.connection.host);
    } catch (error) {
        console.log(`MongoDB connect error`,error.message);
        process.exit(1);
    }
}