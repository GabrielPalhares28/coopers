import React, { useState } from 'react';
import axios from 'axios';
import LogoImage from '/assets/Login.png'; // Certifique-se de que este caminho está correto
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Estado para alternar entre login e cadastro
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Controle de carregamento

  const handleClose = () => {
    window.close(); // Pode ser problemático dependendo do contexto do navegador
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp); // Alterna entre login e cadastro
    setError(''); // Limpa qualquer mensagem de erro ao alternar
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Inicia o carregamento

    if (isSignUp) {
      if (!email.includes('@')) {
        setError("Invalid email format.");
        setLoading(false);
        return;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters.");
        setLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        setLoading(false);
        return;
      }
    }

    try {
      const apiUrl = isSignUp
        ? 'http://localhost:5000/auth/signup'
        : 'http://localhost:5000/auth/login';

      const response = await axios.post(apiUrl, {
        username,
        email,
        password,
      });

      alert(response.data.message); // Sucesso no cadastro ou login
    } catch (err) {
      setError(err.response ? err.response.data.message : "An error occurred.");
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleFormSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '607px',
        padding: '3.08rem',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        textAlign: 'center',
        fontFamily: 'Montserrat',
      }}
    >
      <Button
        onClick={handleClose}
        sx={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          fontFamily: 'Montserrat',
          color: '#000',
          fontSize: '1.5rem',
          textTransform: 'none',
          padding: 0,
          '&:hover': {
            backgroundColor: 'transparent',
            color: '#000',
          },
        }}
      >
        Close
      </Button>

      <Box
         sx={{
        position: 'absolute',
        top: 0,
    left: 0,
    padding: '1rem', // Opcional, para dar espaçamento da borda
  }}
>
  <img
    src={LogoImage}
    alt="Login Logo"
    style={{
      width: '150px',
      height: '150px',
    }}
  />
</Box>

      <Box
        sx={{
          textAlign: 'left',
          mb: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginLeft: '2rem',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            color: '#000',
            mb: 1,
            textAlign: 'left',
          }}
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#4AC959',
            fontSize: '1.2rem',
          }}
        >
          {isSignUp ? 'Create an account' : 'to access your list'}
        </Typography>
      </Box>

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {isSignUp && (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ color: '#000', fontSize: '1.2rem', fontWeight: 'bold', alignSelf: 'flex-start', ml: '5%' }}>
            Email:
          </Typography>
          <TextField
            variant="outlined"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ height: '50px', borderRadius: '10px' }}
          />
        </Box>
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', mb: 2 }}>
        <Typography variant="subtitle1" sx={{ color: '#000', fontSize: '1.2rem', fontWeight: 'bold', alignSelf: 'flex-start', ml: '5%' }}>
          User:
        </Typography>
        <TextField
          variant="outlined"
          type="text"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ height: '50px', borderRadius: '10px' }}
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', mb: 2 }}>
        <Typography variant="subtitle1" sx={{ color: '#000', fontSize: '1.2rem', fontWeight: 'bold', alignSelf: 'flex-start', ml: '5%' }}>
          Password:
        </Typography>
        <TextField
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ height: '50px', borderRadius: '10px' }}
        />
      </Box>

      {isSignUp && (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ color: '#000', fontSize: '1.2rem', fontWeight: 'bold', alignSelf: 'flex-start', ml: '5%' }}>
            Confirm Password:
          </Typography>
          <TextField
            variant="outlined"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{ height: '50px', borderRadius: '10px' }}
          />
        </Box>
      )}

      <Button
        type="submit"
        variant="contained"
        sx={{
          width: '35%',
          height: '38px',
          fontSize: '1rem',
          fontWeight: 'bold',
          backgroundColor: '#4AC959',
          borderRadius: '30px',
          textTransform: 'none',
          marginTop: '2rem',
          '&:hover': {
            backgroundColor: '#4AC959',
          },
        }}
        disabled={loading} // Desabilita o botão enquanto está carregando
      >
        {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
      </Button>

      <Typography
        variant="body2"
        sx={{
          color: '#4AC959',
          marginTop: '1rem',
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
        onClick={toggleSignUp}
      >
        {isSignUp ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up'}
      </Typography>
    </Box>
  );
};

export default Login;
