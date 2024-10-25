const { Router } = require("express");
const userController = require('../controllers/userController')
const router = router();
const {validateUser, validateUserId } = require ("../middlewares/validateUser")


router.post('/', validateUser, userController.create);

router.put('/:id', validateUser, validateUserId, userController.update);

router.delete('/:id', validateUserId, userController.delete);

router.get('/:id', userController.getOne);

router.get('/', validateUserId, userController.getAll);

module.exports = router;

 