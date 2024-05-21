const { model, Schema } = require('mongoose');

const projectSchema = new Schema({
    _id: String,
    featured: Boolean,
    language: String,
    date: Date,
    name: String,
    description: String,
    link: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('project', projectSchema);