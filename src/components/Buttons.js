import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../styles/Buttons.css';

export default function Buttons() {
  return (
    <Stack direction="row" spacing={6}>
      <Button variant="contained"id="team-button">
        Meet the Team</Button>
      <Button variant="contained" href="#contained-buttons" id='event-Button'>
        Our Events
      </Button>
    </Stack>
  );
}
