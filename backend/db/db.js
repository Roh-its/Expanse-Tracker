const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           // useCreateIndex: true, // Add this line to avoid deprecation warning
        });
        console.log('DB Connected');
    } catch (error) {
        console.error('DB Connection Error:', error.message);
        process.exit(1); // Exit the Node.js process if unable to connect to the database
    }
};

module.exports = connectDB;
