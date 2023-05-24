import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import '@mui/material';
import '@mui/icons-material';
import '@emotion/styled';
import '@emotion/react';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';

function App() {

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight)
    return () => window.removeEventListener('resize', updateWidthAndHeight)
  })

  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      grey: createColor('#C0C0C0'),
      black: createColor('#000000'),
      green: createColor('#48973A'),
      contrastText: '#fff',
    },
  });  

  return (
    <>
      <div>
        <div>
          {/* <img src={require('./logo.png')} alt='logo' width={0.2 * width} length={0.2 * height} /> */}
          <div><center>
            {/* <h1 style={{fontFamily: 'Tahoma', color: '#48973A'}}>Sign in to CalenDart</h1>
            <img src={require('./vanity.png')} alt='vanity' width={0.37 * width} length={0.37 * length} />
            <p style={{fontFamily: 'Tahoma', color: '#C0C0C0'}}>use your Dartmouth NetID credentials to sign in</p>
            <div><TextField id="outlined-basic" label="Dartmouth NetID" variant="outlined" sx={{ width: .3 * width, m: 0.8}}/></div>
            <div><TextField id="outlined-basic" label="Password" variant="outlined" sx={{ width: .3 * width, m: 0.8}}/></div>
            <div><Button variant="contained" color="success" sx={{ m: 2.5 }}>Sign In</Button></div> */}
            <Login />
          </center></div>
        </div>
      </div>
    </>
  );
}

export default App;
