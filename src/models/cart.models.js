import mongoose from "mongoose";
const { Schema } = mongoose

const cartSchema = new Schema({
    user: {
        type: Object,
        required: true
    },
    cart:{
        type: Array,
        required: true
    },
    timestamp:{
        type: String,
    }
})
export default mongoose.model('cart', cartSchema);