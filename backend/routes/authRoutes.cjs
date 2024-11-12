
const express = require('express');
const router = express.Router();


router.use(express.json());


router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  
  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters' });
  }

  try {
   
    console.log({ username, email, password });

    
    res.status(201).json({ message: 'User successfully registered' });
  } catch (err) {
    
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
