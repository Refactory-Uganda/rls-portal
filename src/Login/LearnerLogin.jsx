import React from 'react'
import '../Login/syle.css'
import SignUpLogo from '../assets/images/staff-logo.png'
import Dashboard from '../assets/images/refactory-IMS-dashboard.png'
import { AppBar, Button, Grid, TextField, Toolbar } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
// import { AppBar } from '@mui/material'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function StudentSignIn() {
  return (
    <Grid>
      <AppBar
        sx={{
          height:'70px',
          backgroundColor:'#542A52'
        }}
      >
        <Toolbar>
          <img src={SignUpLogo} alt="Logo" className='AppBar-logo'/>  
        </Toolbar>
      </AppBar>
      <div className='student-main-content'>
        <div className="left-column" id='left'>
          Welcome back
        </div>        
        <div className="right-column-parent" id='right'>
          <div className="right-column-child"> 
            <div>
              <h1>Login to RLS</h1>
              <br />
              <p>Enter your details below to access the Staff Dashboard</p>
              <div className='email'>
                <label htmlFor="emailAddress">Email Address<span className='asterisks'>*</span></label><br/> 
                <TextField
                  name="email"
                  placeholder="Enter a valid Email Address"
                  type="email"
                  size='small'
                  fullWidth
                    sx={{
                      marginTop:"5px",
                      height:"50px"
                    }}
                />
              </div>
              <div className='email'>
                <label htmlFor="password">Password<span className='asterisks'>*</span></label><br/>
                <TextField
                  name="password"
                  placeholder="Enter a valid password"
                  type="password"
                  size='small'
                  fullWidth
                  sx={{
                      marginTop:"5px",
                      height:"50px"
                  }}
                />
              </div>
                <div className='remember'>
                  <p><span><Checkbox {...label} /></span>Remember me</p>
                  <p><a href="https://www.google.com/">Forgot Password?</a></p>
                </div>
            </div>
            <br />
            <Button
              fullWidth
              sx={{
                fontSize: '20px',
                fontWeight: '600',
                height:'50px',
                background:'#542A52',
                textTransform:'none',
                boxShadow:'none',
                marginTop:'10px',
                borderRadius:'50px',
                color:'white',
                textAlign:'center',
                ':hover': {
                  bgcolor: 'transparent', // theme.palette.primary.main
                  color: '#542A52',
                  border:'1px solid #542A52',
                  boxShadow:'none'
                },
              }}
              >
                Sign In
            </Button>
          </div>
        </div>        
      </div>
    </Grid>
  )
}
