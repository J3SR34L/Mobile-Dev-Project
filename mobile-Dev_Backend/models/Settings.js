const mongoose = require('mongoose');

// Settings Schema
const settingsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  emailNotifications: {
    type: Boolean,
    default: true
  },
  pushNotifications: {
    type: Boolean,
    default: false
  },
  language: {
    type: String,
    default: 'English'
  },
  location: {
    type: String,
    default: 'Los Angeles, CA'
  },
}, { timestamps: true });

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;
