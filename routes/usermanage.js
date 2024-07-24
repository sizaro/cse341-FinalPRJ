/* ***************************************************
 * ROUTES FOR GETTING, ADDING, UPDATING and DELETING 
 * USERS IN USER MANAGEMENT
 * **************************************************/

const express = require('express');
const router = express.Router();
const userController = require('../controllers/usermanage');
const validate = require('../middleware/validate');
const { isAuthenticated } = require('../middleware/authenticate');

// GET routes
router.get('/user/:id', userController.getOneUser);
router.get('/user', userController.getMultiUsers);

// PUT route
router.post('/user', isAuthenticated, userController.addUser);
// POST route
router.put('/user/:id', isAuthenticated, userController.updateUserbyId);
// DELETE route
router.delete('/delete/:id', isAuthenticated, userController.deleteUser);

module.exports = router;