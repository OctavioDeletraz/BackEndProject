import mongoose from "mongoose";
const { Schema } = mongoose

const messagesSchema = new Schema({
    user: {
        type: Object,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    timestamp:{
        type: String
    }
})
export default mongoose.model('messages', messagesSchema);