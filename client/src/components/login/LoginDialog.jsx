import { useState, useContext } from 'react';
import {Dialog,Box,TextField,Button, Typography,styled} from '@mui/material';
import { authenticateSignup , authenticateLogin} from '../../service/api';
import {DataContext} from '../../context/DataProvider';

const Component=styled(Box)`
    display:flex;
    height:70vh;
    width:90vh;
`
const Image=styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 60% no-repeat;
    height:100%;
    width:30%;
    padding:45px 35px;
    & > p, &> h5 {
        color:#FFFFFF;
        font-weight:600;
    }
`
const LoginButton=styled(Button)`
    text-transform:none;
    background:#FB641B;
    color:#fff;
    height:48px;
    border-radius:2px;
`

const RequestOTP=styled(Button)`
    text-transform:none;
    background:#fff;
    color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`
const Text=styled(Typography)`
    font-size:12px;
    color:#878787;
`;

const CreateAccount=styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor: pointer;
`;

const Wrapper=styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex: 1;
    & > div, & > button, & > p {
        margin-top:20px;
    }
`
const Error=styled(Typography)`
    font-size:10px;
    color:#ff6161;
    line-height:0;
    margin-top:10px;
    font-weight:600;
`

const accountInitialValue= {
    login:{
        view:'login',
        heading:'Login',
        subHeading:"Get access to your Orders, Wishlist and Recommendations"
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subHeading:"Sign up with your mobile to get started"
    }
}
const signupInitialValues={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    Password:'',
    phone:''
}
const loginInitialValues={
    username:'',
    password:''

}

const LoginDialog=({open,setOpen})=>{
    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountInitialValue.login);
        setError(false);
    }

    
    const [account,toggleAccount]=useState(accountInitialValue.login);
    const [signup,setSignup]=useState(signupInitialValues);
    const [login,setLogin]=useState(loginInitialValues);
    const [error, setError]=useState(false);

    const {setAccount}=useContext(DataContext);

    const toggleSignup=()=>{
        toggleAccount(accountInitialValue.signup);
    }

    const onInputChange=(e)=>{
        //console.log(e.target.value);
        setSignup({...signup,[e.target.name]:e.target.value});
    }

    const signupUser=async()=>{
     let response= await authenticateSignup(signup);
     if(!response) return;
     handleClose();
     setAccount(signup.firstname);
    }
    const onValueChange=(e)=>{
        setLogin({ ...login,[e.target.name]:e.target.value});
    }

    const loginUser=async()=>{
        let response=await authenticateLogin(login);
        if(response.status===200){
            handleClose();
            setAccount(response.data.data.firstname);

        }else{
            setError(true);
        }
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
            <Component>
                <Image>
                    <Typography variant="h5">{account.heading}</Typography>
                    <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                </Image>
            { account.view==='login' ?
                <Wrapper>
                    <TextField variant='standard' onChange={(e)=>onValueChange(e)} name='username' label='Enter username'/>
                    {error && <Error>Please Enter valid username or password</Error>}
                    <TextField variant='standard'  onChange={(e)=>onValueChange(e)} name='password' label='Password'/>
                    <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                    <LoginButton onClick={()=> loginUser()}>Login</LoginButton>
                    <Typography style={{textAlign:'center'}}>OR</Typography>
                    <RequestOTP>Request OTP</RequestOTP>
                    <CreateAccount onClick={()=> toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                </Wrapper>
            :   
                <Wrapper>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='firstname' label='Enter Firstname'/>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='lastname' label='Enter Lastname'/>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='username' label='Enter username'/>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='email' label='Enter Email'/>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='password' label='Enter Password'/>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='phone' label='Enter Phone'/>
                    <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                </Wrapper>
            }
                    
            </Component>
        </Dialog>
    )
}
export default LoginDialog;