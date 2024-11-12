
const express = require('express');
const router = express.Router();


router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

 
  console.log({ name, email, message });

  res.status(200).json({ message: 'Message sent successfully' });
});

module.exports = router;
