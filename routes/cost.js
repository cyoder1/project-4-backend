const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// router.get('/', ctrl.post.getAllPosts);
router.post('/:id', ctrl.cost.createCost);
router.get('/:id', ctrl.cost.getCostByProject);
// router.get('/:postId', ctrl.post.getPostById);
// router.get('/:city/all', ctrl.post.getPostsByCity);
router.delete('/:costId/:projectId', ctrl.cost.deleteCost);
router.put('/:costId', ctrl.cost.editCost);

module.exports = router;