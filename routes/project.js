const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/:id', ctrl.project.createProject);
router.get('/:id', ctrl.project.getProjectByUser);
router.delete('/:projectId/:userId', ctrl.project.deleteProject);
router.put('/:projectId', ctrl.project.editProject);

module.exports = router;