import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import '../styles/Team.css';

const teamMembers = [
  { id: 1, name: '', instagram: '', linkedin: '' },
];

const Team = () => {
  return (
    <div className="team-container">
      <h2 className="team-heading">Meet Our Team</h2>
      <Grid container spacing={2}>
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={member.id}>
            <Card className="team-card">
              <CardMedia
                component="img"
                alt={`Team member ${member.name}`}
                height="140"
                image={`url_to_member_image_${member.id}.jpg`}
              />
              <CardContent>
                <p className="member-name">{member.name}</p>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  href={`https://www.instagram.com/${member.instagram}`}
                  target="_blank"
                >
                  Instagram
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  href={`https://www.linkedin.com/in/${member.linkedin}`}
                  target="_blank"
                >
                  LinkedIn
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Team;





