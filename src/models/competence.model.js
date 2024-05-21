const { model, Schema } = require('mongoose');

const competenceSchema = new Schema({
    _id: String,
    featured: Boolean,
    language: String,
    title: String,
    description: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('competence', competenceSchema);