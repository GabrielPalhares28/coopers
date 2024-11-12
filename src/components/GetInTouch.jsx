import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Avatar } from '@mui/material';
import Vector from '/src/assets/Vector.png'; // Certifique-se de que este caminho para a imagem está correto
import axios from 'axios';

function GetInTouch() {
  // Estados para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  // Função para atualizar o estado do formulário
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para manipular o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/contact', formData);
      setResponseMessage('Message sent successfully');
      setFormData({ name: '', email: '', telephone: '', message: '' }); // Limpa o formulário
    } catch (error) {
      setResponseMessage('Failed to send message');
    }
  };

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: 6, textAlign: 'center' }}>
      <Container maxWidth="xs" sx={{ position: 'relative', borderRadius: 2, boxShadow: 3, padding: 4, backgroundColor: '#ffffff' }}>
        <Avatar
          alt="User Avatar"
          src="/assets/tatiana.png"
          sx={{ width: 80, height: 80, position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)' }}
        />
        
        {/* Contêiner para o "GET IN TOUCH" com a imagem e o texto */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 4, marginBottom: 2 }}>
          <img src={Vector} alt="Vector Icon" width="60px" height="60px" style={{ marginRight: 8 }} />
          <Box>
            <Typography variant="h6" sx={{ fontFamily: 'Montserrat', color: '#000', lineHeight: 1 }}>
              GET IN
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: 'Montserrat', color: '#000', lineHeight: 1 }}>
              TOUCH
            </Typography>
          </Box>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField 
            label="Your Name" 
            fullWidth 
            margin="normal" 
            variant="outlined" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
          <TextField 
            label="Email" 
            type="email" 
            fullWidth 
            margin="normal" 
            variant="outlined" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          <TextField 
            label="Telephone" 
            type="tel" 
            fullWidth 
            margin="normal" 
            variant="outlined" 
            name="telephone" 
            value={formData.telephone} 
            onChange={handleChange} 
          />
          <TextField
            label="Message"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="success" fullWidth sx={{ marginTop: 2 }}>
            Send Now
          </Button>
        </form>

        {responseMessage && (
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
            {responseMessage}
          </Typography>
        )}
      </Container>
      <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3 }}>
        Need Help? <a href="mailto:coopers@coopers.pro">coopers@coopers.pro</a>
      </Typography>
    </Box>
  );
}

export default GetInTouch;
