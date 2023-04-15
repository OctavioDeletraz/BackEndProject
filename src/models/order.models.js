import mongoose from "mongoose";
const { Schema } = mongoose

const orderSchema = new Schema({
    user: {
        type: Object,
        required: true
    },
    order:{
        type: Array,
        required: true
    },
    timestamp:{
        type: String
    },
    state:{
        type: Boolean,
        required: true
    }
})
export default mongoose.model('order', orderSchema);