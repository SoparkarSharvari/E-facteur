import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useState, useEffect} from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import Grid from '@mui/material/Grid';
import vector1 from '/Users/sharvarisoparkar/Desktop/E-facteur/e-facteur_website/src/vector11.png'
import vector2 from '/Users/sharvarisoparkar/Desktop/E-facteur/e-facteur_website/src/vector12.png'
import vector3 from '/Users/sharvarisoparkar/Desktop/E-facteur/e-facteur_website/src/vector13.png'
import vector21 from '/Users/sharvarisoparkar/Desktop/E-facteur/e-facteur_website/src/vector21.png'
import vector22 from '/Users/sharvarisoparkar/Desktop/E-facteur/e-facteur_website/src/vector22.png'
import vector23 from '/Users/sharvarisoparkar/Desktop/E-facteur/e-facteur_website/src/vector23.png'
import nameLogoVector from '/Users/sharvarisoparkar/Desktop/E-facteur/e-facteur_website/src/Logo(1).png'
import Home from '/Users/sharvarisoparkar/Desktop/E-facteur/e-facteur_website/src/components/Home.js'

import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";


const Component = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const OuterBox =styled(Box)`
    justify-content: flex-start;
    border-radius: 30px; 
    width: 400px;
    margin: auto;
    margin-top :50px
`;

const TaglineBox =styled(Box)` 
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

// const Image = styled('img')({
//   width: 100,
//   display: 'flex',
//   margin: 'auto',
//   padding: '40px 0 0'
// });
// const Name = styled(Typography)`
//   algin:center;
//   font-size: 18px;
//   font-weight: bold;
//   margin-left:80px;
// `;
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
const Tagline = {
  opacity:'100%',
  color: '#100000',
  fontSize: '45px',
  fontFamily: 'Inter',
  fontStyle: 'italic',
  fontWeight: '900px',
  margin:'0px',
}

const Login = (props) => {

  const [account, toggleAccount] = useState('login');
  const [login, setLogin] = useState({username: '',password: ''});
  const [signup, setSignup] = useState({ name: '',username: '',password: ''});
  const [error, showError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [value,setValue] = useState('')
  const navigate = useNavigate ();

  useEffect(() => {
    showError(false);
    setValue(localStorage.getItem('email'))
}, [login])

const toggleSignup = () => {
  account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
}
const handleClick =()=>{
  signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
      navigate('/home');
  })
}
// useEffect(()=>{
//         setValue(localStorage.getItem('email'))
//     })

const onValueChange = (form, field, value) => {
  if (form === 'login') {
    setLogin((prevLogin) => ({ ...prevLogin, [field]: value }));
  } else {
    setSignup((prevSignup) => ({ ...prevSignup, [field]: value }));
  }
};

  return (
    
    <div class="background-container" style={{width:'100%'}}>
      
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
            <TaglineBox style={{width:' 100%',height: '100%',flexShrink: '0px',marginTop:'100px',marginRight:'98px',marginLeft:'155px' }}>
              {account ==='login'?
             <>
                <img src={vector1} alt="SVG" width='110px' style={{marginLeft:'18px',marginBottom:'8px'}}/>
                <Grid container spacing={1}>
                <Grid item xs={6} style={{ height: '10px' }}>
                <h3 style={Tagline}> FIND THE </h3>  </Grid>
                <Grid item xs={6}  style={{ height: '60px' }}><img src={vector2} alt="SVG" width='150px' style={{marginLeft:'40px'}}/><br></br>
                </Grid></Grid>
                <h3 style={Tagline}> FASTEST, <br></br>
                  SAFEST, <br></br>
                  AND BEST DELIVERY <br></br>
                  FOR YOUR GOODS
                </h3> 
                <img src={vector3} alt="SVG" width='200px' style={{marginLeft:'105px'}}/><br></br>
              </> 
                :
                <>
                <img src={vector21} alt="SVG" width='150px' style={{marginLeft:'0px',marginBottom:'8px'}}/>
                <Grid container spacing={1}>
                  <Grid item xs={6} style={{ height: '10px' }}>
                    <h3 style={Tagline} marginLeft='80px'>SHIP SMARTER,</h3> 
                  </Grid>
                  <Grid item xs={6} style={{ height: '10px' }}>
                    <img src={vector22} alt="SVG" width='210px' style={{marginLeft:'18px',marginBottom:'8px'}}/>
                  </Grid></Grid>
                  <h3 style={Tagline}><br></br> SIGN UP NOW.</h3>
                <img src={vector23} alt="SVG" width='160px' style={{marginLeft:'18px',marginTop:'28px'}}/></>}
            </TaglineBox>
         
        </Grid>
        <Grid item xs={6}>
          <OuterBox style={{backgroundColor:'rgba(255, 255, 255, 0.3)'}}> 
        <img src={nameLogoVector} alt="SVG" width='168px' height='36px' style={{paddingTop:'30px',marginLeft:'30px',marginBottom:'0px'}}/>
        {
        account === 'login' ?
          <Component className='loginBox'>
              <TextField id="outlined-basic1"  onChange={(e) => onValueChange('login', 'username', e.target.value)}value={login.username} label="UserName" variant="outlined" />
              <TextField
        id="outlined-basic2"
        type={showPassword ? 'text' : 'password'}  // Toggle between text and password
        onChange={(e) => onValueChange('login', 'password', e.target.value)}
        value={login.password}
        label="Password"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
              {error && <Error>{error}</Error>}
              <LoginButton variant="contained" >Login</LoginButton>
              <Text style={{ textAlign: 'center' }}>OR</Text>
              <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 20 }}>Create an account</SignupButton> 
              {/* diff authentication apis */}
              <Stack direction="row" spacing={4} style={{marginLeft:'30px', marginTop:'0px'}}>
              
              <Button variant="outlined" style={{background:'white'}} onClick={handleClick}>
                  <GoogleIcon></GoogleIcon>
                </Button>
                <Button variant="outlined" style={{background:'white'}}>
                  <MicrosoftIcon></MicrosoftIcon>
                </Button>
                <Button variant="outlined" style={{background:'white'}}>
                  <FacebookIcon></FacebookIcon>
                </Button>
              </Stack>
          </Component>
          :
          <Component className='signInBox'>
              <TextField id="outlined-basic1" label="Full Name"onChange={(e) => onValueChange('signup', 'name', e.target.value)}     value={signup.name} variant="outlined" />
              <TextField id="outlined-basic2" label="UserName" onChange={(e) => onValueChange('signup', 'username', e.target.value)} value={signup.username}variant="outlined" />
              <TextField id="outlined-basic3" type="password"label="Password" onChange={(e) => onValueChange('signup', 'password', e.target.value)} value={signup.password}variant="outlined" />
              <SignupButton >Signup</SignupButton>
              <Text style={{ textAlign: 'center' }}>OR</Text>
              <LoginButton variant="contained" onClick={() => toggleSignup()}style={{ marginBottom: 20 }}>Already have an account</LoginButton>
              <Stack direction="row" spacing={4} style={{marginLeft:'30px', marginTop:'0px'}}>
              <Button variant="outlined" style={{background:'white'}}>
                  <GoogleIcon></GoogleIcon>
                </Button>
                <Button variant="outlined" style={{background:'white'}}>
                  <MicrosoftIcon></MicrosoftIcon>
                </Button>
                <Button variant="outlined" style={{background:'white'}}>
                  <FacebookIcon></FacebookIcon>
                </Button>
              </Stack>
          </Component>
        }     
      </OuterBox>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}
export default Login;