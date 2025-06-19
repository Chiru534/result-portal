import mongoose from 'mongoose';

export const connectToDB = async () => {
    try {
        // Updated connection string format
        const MONGODB_URI = "mongodb+srv://mchiranjeeviadarsh:Chiru%40534@cluster0.adkgid9.mongodb.net/Collegeproject";
        
        // Remove deprecated options
        const options = {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        };

        await mongoose.connect(MONGODB_URI, options);
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectToDB;
