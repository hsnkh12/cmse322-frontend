import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useAuth} from '../../hooks/auth'
import { useState } from 'react';
import { FormGroup } from '@mui/material';

const theme = createTheme();

export default function SignUpForm() {

  const { loading, error, authenticateUser } = useAuth("signup");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    if(!email || !password){
      console.log('empty')
      return 
    }
    
    authenticateUser(email, password);
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 , marginBottom:2}}>
          <TextField
              style={{backgroundColor:'white', marginBottom:15}}
              fullWidth
              required
              id="email"
              label="username"
              name="username"
              autoComplete="username"
            />
            <TextField
              style={{backgroundColor:'white'}}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
            style={{backgroundColor:'white'}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {error? <p style={{color:'red', backgroundColor:'#f0efed', padding:10, borderRadius:5}}>{error}</p>: null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor:'#424242'}}
            >
              Sign Up
            </Button>
            <Link href="/signin" variant="body2" style={{color:'white'}}>
                  {"Already have an account? Sign In"}
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


