const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/:id', ctrl.cost.createCost);
router.get('/:id', ctrl.cost.getCostByProject);
router.delete('/:costId/:projectId', ctrl.cost.deleteCost);
router.put('/:costId', ctrl.cost.editCost);

module.exports = router;