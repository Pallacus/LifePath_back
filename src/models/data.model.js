const { model, Schema } = require('mongoose');

const personal_dataSchema = new Schema({
    _id: String,
    featured: Boolean,
    name: String,
    last_name: String,
    email: String,
    git: String,
    phone_number: String,
    city: String,
    git: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('personal_data', personal_dataSchema);