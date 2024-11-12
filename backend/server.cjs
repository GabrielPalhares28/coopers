const express = require('express');
const cors = require('cors');  
const app = express();


const authRoutes = require('./routes/authRoutes.cjs');  
const contactRoutes = require('./routes/contactRoutes.cjs');  


app.use(cors());  
app.use(express.json());  


app.use('/auth', authRoutes);  


app.use('/contact', contactRoutes); 


app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});


app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
