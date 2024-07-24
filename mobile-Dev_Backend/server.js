const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
// const userRoutes = require('./routes/user');
// const authRoutes = require('./routes/auth');
// const messageRoutes = require('./routes/messages');
const app=require('./app.js')
// const settingsRoutes = require('./routes/settings');



// Load environment variables from config.env file
dotenv.config({ path: './config.env' });

const PORT = process.env.PORT || 8000;

// Middleware
// app.use(cors());
// app.use(express.json());

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(error.name, error.message);
  process.exit(1);
});

// Connect to MongoDB
// mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('DB connection successful!');
// }).catch((error) => {
//   console.error('DB connection error:', error);
// });

// Mount routers
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/messages', messageRoutes);
// app.use('/api/settings', settingsRoutes);


// Signup route
app.post('/signup', (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Basic validation
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).send('All fields are required');
  }

  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match');
  }

  // Here, you can add code to save the user data to your database

  return res.status(200).send('User registered successfully');
});

// Signin route
app.post('/signin', (req, res) => {
  const { phoneNumber, method } = req.body;

  // Basic validation
  if (!phoneNumber || !method) {
    return res.status(400).send('Phone number and method are required');
  }

  // Here, you can add code to handle sign-in with phone number or WhatsApp

  return res.status(200).send('Sign-in successful');
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.log(error.name, error.message);
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const userRoutes = require('./routes/user');
// const authRoutes = require('./routes/auth');
// const messageRoutes = require('./routes/messages');

// // Load environment variables from config.env file
// dotenv.config({ path: './config.env' });

// const app = express();
// const PORT = process.env.PORT || 8000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Handle uncaught exceptions
// process.on('uncaughtException', (error) => {
//   console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
//   console.log(error.name, error.message);
//   process.exit(1);
// });

// // Connect to MongoDB
// mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('DB connection successful!');
// }).catch((error) => {
//   console.error('DB connection error:', error);
// });

// // Mount routers
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/messages', messageRoutes);

// // Signup route with validation
// app.post(
//   '/signup',
//   [
//     check('name', 'Name is required').not().isEmpty(),
//     check('email', 'Please include a valid email').isEmail(),
//     check('password', 'Password is required with minimum length of 6').isLength({ min: 6 }),
//     check('confirmPassword', 'Confirm Password is required with minimum length of 6').isLength({ min: 6 }),
//   ],
//   (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { name, email, password, confirmPassword } = req.body;

//     if (password !== confirmPassword) {
//       return res.status(400).json({ errors: [{ msg: 'Passwords do not match' }] });
//     }

//     // Here, you can add code to save the user data to your database

//     return res.status(200).send('User registered successfully');
//   }
// );

// // Signin route with validation
// app.post(
//   '/signin',
//   [
//     check('phoneNumber', 'Phone number is required').not().isEmpty(),
//     check('method', 'Method is required').not().isEmpty(),
//   ],
//   (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { phoneNumber, method } = req.body;

//     // Here, you can add code to handle sign-in with phone number or WhatsApp

//     return res.status(200).send('Sign-in successful');
//   }
// );

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (error) => {
//   console.log(error.name, error.message);
//   console.log('UNHANDLED REJECTION! 💥 Shutting down...');
//   server.close(() => {
//     process.exit(1);
//   });
// });

// // Start the server
// const server = app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
