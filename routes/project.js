const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// router.get('/', ctrl.post.getAllPosts);
router.post('/:id', ctrl.project.createProject);
router.get('/:id', ctrl.project.getProjectByUser);
// router.get('/:postId', ctrl.post.getPostById);
// router.get('/:city/all', ctrl.post.getPostsByCity);
router.delete('/:projectId/:userId', ctrl.project.deleteProject);
router.put('/:projectId', ctrl.project.editProject);

module.exports = router;