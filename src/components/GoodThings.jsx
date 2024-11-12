// src/components/GoodThings.jsx
import React from 'react';
import { Typography, Box, Container, Card, CardContent, Button } from '@mui/material';

const goodThingsData = [
  {
    title: "Efficient task management",
    description: "Organize your daily job enhance your life performance",
    image: "/src/assets/image.png",
  },
  {
    title: "Keep track of your priorities",
    description: "Mark one activity as done makes your brain understands the power of doing.",
    image: "/src/assets/image (1).png",
  },
  {
    title: "Achieve your goals faster",
    description: "Careful with misunderstandings the difference between a list and a list of desires.",
    image: "/src/assets/image (2).png",
  },
];

function GoodThings() {
  return (
    <Box sx={{ backgroundColor: '#4caf50', padding: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#ffffff' }}>
        Good Things
      </Typography>
      <Container sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
        {goodThingsData.map((item, index) => (
          <Card key={index} sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3 }}>
            <img src={item.image} alt="Icon" style={{ width: '100%', height: 'auto', borderRadius: '8px 8px 0 0' }} />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {item.description}
              </Typography>
              <Button variant="text" color="primary" sx={{ marginTop: 1 }}>Read more</Button>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
}

export default GoodThings;
