import React from 'react';
import Link from 'next/link';
import { Button } from '@material-ui/core';

const styles = {
  button: {
    backgroundColor: '#ffffff',
    color: '#333333',
    border: '1px solid #333333',
    textTransform: 'none',
    fontSize: '16px',
    padding: '10px 20px',
    margin: '10px',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
};

function AboutButton() {
  return (
    <Link href="/about" passHref>
      <Button style={styles.button}>
        About
      </Button>
    </Link>
  );
}

export default AboutButton;
