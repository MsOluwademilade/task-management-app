const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);
// Use the MONGO_URI directly from environment variables
const mongoURI = process.env.MONGO_URI;

// For debugging
console.log('Attempting to connect with URI:', mongoURI);

module.exports = async function connectDB() {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed');
        console.error(error);
        // More detailed error logging
        if (error.name === 'MongooseServerSelectionError') {
            console.error('Error details:', error.reason);
        }
    }
};
