const router = require('express').Router();
const userController = require('../controller/user.controller');

//récupération de tous les utilisateurs
router.get('/', userController.getAllUser);

//récupération des utilisateurs en fonction de la saisie dans l'input
router.get('/:firstName', userController.getUser);


module.exports = router;