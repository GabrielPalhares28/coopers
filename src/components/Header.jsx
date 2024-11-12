import React, { useState } from 'react';
import { Box, Typography, Button, Container, Modal } from '@mui/material';
import logo from '../assets/Logo.png';
import backgroundGreen from '../assets/BG.png';
import officeImage from '../assets/foto.png';
import bgImage from '../assets/BG1.png';
import Login from './Login'; // Importa o componente de login

function Header() {
  // Estado para controlar a visibilidade do modal de login
  const [openLoginModal, setOpenLoginModal] = useState(false);

  // Funções para abrir e fechar o modal
  const handleOpenLoginModal = () => setOpenLoginModal(true);
  const handleCloseLoginModal = () => setOpenLoginModal(false);

  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f9',
        padding: '3rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Seção de texto e logo */}
        <Box sx={{ textAlign: 'left' }}>
          <img src={logo} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
          <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            Organize
          </Typography>
          <Typography variant="h5" sx={{ color: '#4AC959', fontWeight: 'bold', marginBottom: 2 }}>
            Your daily jobs
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#666', marginBottom: 4 }}>
            The only way to get things done
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{
              backgroundColor: '#4AC959',
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
          >
            Go to To-do list
          </Button>
        </Box>

        {/* Imagem com sobreposição e botão de entrada */}
        <Box sx={{ position: 'relative', width: '350px', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Botão "entrar" redimensionado que abre o modal de login */}
          <Button
            variant="contained"
            sx={{
              position: 'absolute',
              top: '-20px',
              right: '20px',
              backgroundColor: '#000',
              color: '#fff',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              padding: '0.4rem 1.3rem',
              zIndex: 2,
            }}
            onClick={handleOpenLoginModal} // Ao clicar, abre o modal de login
          >
            entrar
          </Button>

          {/* Imagem verde de fundo */}
          <img 
            src={backgroundGreen} 
            alt="Green Background" 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
            }} 
          />
          
          {/* Imagem do escritório */}
          <img 
            src={officeImage} 
            alt="Office Image" 
            style={{
              position: 'relative',
              width: '224px',
              height: 'auto',
              borderRadius: '10px',
              zIndex: 1,
              marginTop: '20px',
            }} 
          />
        </Box>
      </Container>

      {/* Modal de Login */}
      <Modal
        open={openLoginModal}
        onClose={handleCloseLoginModal}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          {/* Componente de Login dentro do Modal */}
          <Login onClose={handleCloseLoginModal} />
        </Box>
      </Modal>

      {/* Seção To-do List com imagem de fundo e frase */}
      <Box sx={{
        position: 'relative',
        marginTop: 4,
        padding: '2rem 0',
        color: '#fff',
        textAlign: 'center',
      }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0, 
            opacity: 0.8,
          }}
        />
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 1, zIndex: 1, position: 'relative' }}>
          To-do List
        </Typography>
        <Box
          sx={{
            width: '60px',
            height: '4px',
            backgroundColor: '#4AC959',
            margin: '0.5rem auto 1rem',
            zIndex: 1,
            position: 'relative',
          }}
        ></Box>
        <Typography variant="body1" sx={{ zIndex: 1, position: 'relative' }}>
          Drag and drop to set your main priorities
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, zIndex: 1, position: 'relative' }}>
          Check when done and create what’s new.
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
