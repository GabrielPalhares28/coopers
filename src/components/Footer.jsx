// src/components/Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', padding: 2, textAlign: 'center' }}>
      <Typography variant="body2">
        © 2024 Coopers. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
