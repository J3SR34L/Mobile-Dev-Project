const express = require('express');
const router = express.Router();
const Settings = require('../models/Settings');
const auth = require('../middleware/auth');

// Get user settings
router.get('/https://your-backend-api.com/settings', auth, async (req, res) => {
  try {
    const settings = await Settings.findOne({ userId: req.user._id });
    res.send(settings);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Update user settings
router.put('/https://your-backend-api.com/settings', auth, async (req, res) => {
  const updates = req.body;
  try {
    const settings = await Settings.findOneAndUpdate({ userId: req.user._id }, updates, { new: true });
    res.send(settings);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
