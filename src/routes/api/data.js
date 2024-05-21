const router = require('express').Router();

const PersonalData = require('../../models/data.model');
const Training = require('../../models/training.model');
const Project = require('../../models/project.model');
const Experience = require('../../models/experience.model');
const Competence = require('../../models/competence.model');

router.get('/fullName', async (req, res) => {
    try {
        const personalDatas = await PersonalData.find({ featured: true });
        const fullName = (`${personalDatas[0].name} ${personalDatas[0].last_name}`);

        res.json(fullName);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/personal', async (req, res) => {
    try {
        const personalDatas = await PersonalData.find({ featured: true });
        res.json(personalDatas);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/lastTraining/:lang', async (req, res) => {
    try {
        const trainings = await Training.find({ language: req.params.lang }).sort({ date: -1 });
        res.json(trainings[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/trainings/:lang', async (req, res) => {
    try {
        const trainings = await Training.find({ language: req.params.lang }).sort({ date: -1 });
        trainings.shift(1);
        res.json(trainings);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/projects/:lang', async (req, res) => {
    try {
        const projects = await Project.find({ language: req.params.lang });
        res.json(projects);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/experiences/:lang', async (req, res) => {
    try {
        const experiences = await Experience.find({ language: req.params.lang }).sort({ date: -1 });
        res.json(experiences);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/competences/:lang', async (req, res) => {
    try {
        const competences = await Competence.find({ language: req.params.lang });
        res.json(competences);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;