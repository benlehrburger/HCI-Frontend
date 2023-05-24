import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import test from './img/test.png';
import SignUp from './SignUp.jsx';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.intro2hci.site/project#h.iem6bgwlw52">
        CalenDart
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function getRandomImage() {

  var randomImage = new Array();

  randomImage[0] = 'https://static.wikia.nocookie.net/nupepedia/images/2/27/Baker_Winter_Dartmouth_College.jpg/revision/latest?cb=20160429160929';
  randomImage[1] = 'https://www.dartmouthcollegefund.org/sites/default/files/wide_12.jpg';
  randomImage[2] = 'https://www.dartmouthcollegefund.org/sites/default/files/wide_10.jpg';
  randomImage[3] = 'https://www.dartmouthcollegefund.org/sites/default/files/wide_8.jpg';
  randomImage[4] = 'https://www.dartmouthcollegefund.org/sites/default/files/wide_9.jpg';
  randomImage[5] = 'https://www.dartmouthcollegefund.org/sites/default/files/wide_3.jpg';
  randomImage[6] = 'https://www.dartmouthcollegefund.org/sites/default/files/wide_1.jpg';
  randomImage[7] = 'https://www.dartmouthcollegefund.org/sites/default/files/wide_4.jpg';
  randomImage[8] = 'https://www.dartmouthcollegefund.org/sites/default/files/wide_11.jpg';
  randomImage[9] = 'https://mediaim.expedia.com/destination/1/912cb9a5e8e758d0485de17146e3a447.jpg';
  randomImage[10] = 'https://graduate.dartmouth.edu/sites/graduate_studies.prod/files/graduate_studies/images/dart-campus-spring-1_0.jpg';

  var number = Math.floor(Math.random()*randomImage.length);
  console.log(randomImage[number])
  return randomImage[number];
};

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://graduate.dartmouth.edu/sites/graduate_studies.prod/files/graduate_studies/images/dart-campus-spring-1_0.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div style={{ paddingBottom: '20px' }}>
              <img src="https://raw.githubusercontent.com/benlehrburger/HCI-Frontend/main/custom-implementation/src/logo.png" alt="CalenDART Logo" width='220' height='80' />
            </div>
            <Typography component="h1" variant="h6" sx={{ color: "#666666" }}>
              Sign in with your Dartmouth NetID credentials
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#027202" }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" color="inherit" sx={{ color: "#666666" }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item xs>
                  <Link href="#" variant="body2" color="inherit" sx={{ color: "#666666" }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
