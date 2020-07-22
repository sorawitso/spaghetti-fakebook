const express = require('express')
const router = express.Router()
const userController= require('../controllers/userController');
const isLoggedIn = require('../middleware/checkLogin');

router.get('/', userController.index)
// router.get('/:id', isLoggedIn ,  userController.getUserById) ; 

// router.post('/', userController.createUser) ; 
// router.put('/:id', userController.updateUser)
// router.delete('/:id', userController.deleteUser) ;
 
module.exports = router


