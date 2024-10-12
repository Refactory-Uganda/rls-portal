import React from 'react'
import { Link } from "react-router-dom";
import '../Login/style.css'
import SignUpLogo from '../assets/images/staff-logo.png'
import Dashboard from '../assets/images/refactory-IMS-dashboard.png'
import { Button} from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import Cookies from 'js-cookie';
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
// import ErrorAlert from '../dashboard/microComponent/ErrorAlert'
// import useAxiosPrivate from '../dashboard/hooks/useAxiosPrivate'
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios'
import * as yup from 'yup'
import { Formik} from 'formik'
import { TextField1 } from '../microComponents/TextField1'

// import { AppBar } from '@mui/material'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function UserSignIn() {

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const from = navigate.state?.from?.pathname || { pathname: "/" };

  const Login = async (values) =>{
    setLoading(true)
    axios({
        method: 'post',
        // url: `${process.env.REACT_APP_API_URL}/auth/login`,
        data: {
          "email": values.email,
          "password": values.password
        },                
        
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
            // origin: true
        
      }).then(response => {
        console.log(response)
          if(response.status === 200){
              setLoading(false)
              var email = values.email
              var password = values.password
              
            //   axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
              Cookies.remove("refresh_token")
              Cookies.remove("access_token")
              Cookies.set("refresh_token", response.data.tokens.refresh_token)
              Cookies.set("access_token", response.data.tokens.access_token)
              // navigate('/AdminDashboard', {replace: true})

              //  Dashboard Conditional Rendering
              if(response.data.user.role ==='Administrator'){
                navigate('/AdminDashboard', {replace: true})
              }else if(response.data.user.role === 'Facilitator'){
                navigate('/facilitatorDashboard', {replace: true})
              }else if (response.data.user.role ==='Student'){
                navigate('/studentDashboard', {replace: true})
              }
          }

      }).catch((error) => {
        if(error.response.status === 401){
            setLoading(false)
            setError(true)
        }
        // if(error.response.data.status){
        //     setError(true)
        // }
})

      
}

const validationSchema = yup.object({

  email: yup.string().required('Required').email('Provide a valid email'),
  password: yup.string().required('Required'),
})  

  return (
    <Formik initialValues={{ 
      email: "",
      password: "",
      }}  
    validationSchema={validationSchema}
    onSubmit={(values) => {
      Login(values);
    }}
    >
      {({ values, handleChange, handleSubmit, errors, isValidating, isSubmitting, touched }) => (

    <form className='form-wrap' onSubmit={handleSubmit} method="POST">
    <div className='container'>
      <nav className='appBar'>
        <img src={SignUpLogo} alt="Logo" className='nav-logo'/>
      </nav>
      <div className='main-content'>
            <div className='column-grid'>
                <div className='col-1'>
                    <div className='column-content'>
                        <h1>Welcome back</h1>
                        <br />
                        <img src={Dashboard} alt="signupDashboard"/>
                    </div>
                </div>
                <div className='col-2'>
                {error && <ErrorAlert message={"Invalid credentials"}/>}
                    <div>
                      <h1>
                        LogIn to RLS
                      </h1>
                      <br />
                      <p>
                        Enter your details below to access the Staff Dashboard
                      </p>
                        <div className='email'>
                          <label htmlFor="emailAddress">Email Address<span className='asterisks'>*</span></label><br/>
                          <TextField1
                            name="email"
                            placeholder="Enter a valid Email Address"
                            // type="email"
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
                          <TextField1
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
                          <p><Link to="/forgotPassword">Forgot Password?</Link> </p>
                        </div>
                    </div>
                    <br />
                    {loading ? (
            <LoadingButton
            className='btnNext'
            loading
            color="secondary"
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
            fullWidth
            sx={{
              fontSize: '20px',
              fontWeight: '600',
              height:'50px',
              background:'#542A52',
              textTransform:'none',
              boxShadow:'none',
              marginTop:'10px',
              borderRadius:'5px',
              color:'white',
              textAlign:'center', 
            }}
          >Signing in</LoadingButton>
            ): (   
                    <Button
                  fullWidth
                  type='submit'
                  sx={{
                    fontSize: '20px',
                    fontWeight: '600',
                    height:'50px',
                    background:'#542A52',
                    textTransform:'none',
                    boxShadow:'none',
                    marginTop:'10px',
                    borderRadius:'5px',
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
            )}
                </div>
            </div>
      </div>
    </div>
    </form>
      )}
      </Formik>
  )
}
