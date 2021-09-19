
const express = require('express');
const chatController = require('../controllers/chatController');
const router = express.Router();

// Redirect to Home page
router.get('/', function(req, res) {
    res.redirect('/');
});

// POST Chat Message
router.post('/', chatController.insertMessage);

// GET Chat Messages by Username
router.get('/:username', chatController.getMessages);

// Export Routers Externally
module.exports = router;