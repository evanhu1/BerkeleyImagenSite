"use client";
import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';

const styles = {
  container: {
    padding: '50px',
    backgroundColor: '#ffffff',
    height: '100vh',
    textAlign: 'center',
  },
  header: {
    marginBottom: '20px',
  },
  subheader: {
    marginBottom: '20px',
  },
  text: {
    marginBottom: '20px',
    fontSize: '16px',
    lineHeight: '26px',
  },
};

function About() {
  return (
    <Container style={styles.container}>
      <Typography variant="h2" style={styles.header} gutterBottom>
        About
      </Typography>
      
      <Typography variant="body1" style={styles.text} paragraph>
        Berkeley Imagen (imagine) is a new student organization focused on exploring the groundbreaking field of Generative AI, as well as its transformative potential applications. 
      </Typography>
      
      <Typography variant="body1" style={styles.text} paragraph>
        Members collaborate on diverse projects that combine technical and creative work: applying cutting-edge technologies such as Stable Diffusion and LLMs to real-world problems or exploring new forms of artistic expression through multi-modal AI.
      </Typography>
      
      <Typography variant="body1" style={styles.text} paragraph>
        Berkeley Imagen also is a space for anyone simply seeking to learn more about Generative AI and find others who share that interest. 
      </Typography>

      <Typography variant="body1" style={styles.text} paragraph>
        Whether you're a coder, artist, musician, or anyone else, this club offers an inclusive and social space for anyone curious about the limitless possibilities of Generative AI.
      </Typography>
    </Container>
  );
}

export default About;
