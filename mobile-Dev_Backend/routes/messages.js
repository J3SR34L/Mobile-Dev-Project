// const express = require('express');
// const router = express.Router();
// const { check, validationResult } = require('express-validator');
// const auth = require('../middleware/auth');

// // Placeholder for message model, replace with actual model if needed
// const messages = [];

// // Get all messages
// router.get('/', auth, async (req, res) => {
//   try {
//     // Replace with actual message retrieval logic
//     res.json({ messages });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Add a new message
// router.post(
//   '/',
//   [
//     auth,
//     [check('text', 'Text is required').not().isEmpty()]
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { text } = req.body;

//     try {
//       // Replace with actual message saving logic
//       const newMessage = { text, user: req.user.id };
//       messages.push(newMessage);
      
//       res.json({ msg: 'Message saved', message: newMessage });
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server error');
//     }
//   }
// );

// module.exports = router;


const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const auth = require('../middleware/auth');

// Placeholder for message model, replace with actual model if needed
const messages = [];

// Get all messages
router.get('/', auth, async (req, res) => {
  try {
    // Replace with actual message retrieval logic
    res.json({ messages });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add a new message
router.post(
  '/',
  [
    auth,
    check('text', 'Text is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { text } = req.body;

    try {
      // Replace with actual message saving logic
      const newMessage = { text, user: req.user.id };
      messages.push(newMessage);
      
      res.json({ msg: 'Message saved', message: newMessage });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
