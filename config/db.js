import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/clone_shopee');

        console.log('Thanh cong');
    } catch (error) {
        console.log('F');
    }
};

export default connectDB;
