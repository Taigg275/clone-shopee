import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        products: [
            {
                type: mongoose.ObjectId,
                ref: 'product',
                required: true,
            },
        ],

        buyer: {
            type: mongoose.ObjectId,
            ref: 'account',
            required: true,
        },
        status: {
            type: String,
            default: 'Processing',
            enum: ['Not Process', 'Processing', 'Shipped', 'deliverd', 'cancel'],
        },
    },
    { timestamps: true },
);

export default mongoose.model('Order', orderSchema);
