const express = require('express');
const router = express.Router();
const app = express();
const Controller = require('../controllers/auth.controller');
const authController = new Controller();

router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;
