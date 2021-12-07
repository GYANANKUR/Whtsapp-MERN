import mongoose from 'mongoose';

const whtsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timeStamp: String,
    received: Boolean
});

export default mongoose.model('messagecontents', whtsappSchema);