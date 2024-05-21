const { model, Schema } = require('mongoose');

const experienceSchema = new Schema({
    _id: String,
    featured: Boolean,
    language: String,
    date_from: Date,
    date_to: Date,
    company: String,
    position: String,
    description: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('experience', experienceSchema);