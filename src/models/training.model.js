const { model, Schema } = require('mongoose');

const trainingSchema = new Schema({
    _id: String,
    featured: Boolean,
    language: String,
    date: Date,
    academy: String,
    title: String,
    description: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('training', trainingSchema);