import { Box, Button, Typography, styled,Badge } from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
import { useState,useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

//components
import LoginDialog from '../login/LoginDialog';

const Wrapper = styled(Box)(({theme})=>({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > button, & > p, & > div': {
        marginRight: '40px',
        fontSize: '16px',
        alignItems: 'center',
    },
    [theme.breakpoints.down('md')]:{
        display:'block',
    },
}));

const Container = styled(Link)(({theme})=>({
    
    display: 'flex',
    textDecoration:'none',
    color:'inherit',

   // backgroundColor: '#2874f0',
    /*[theme.breakpoints.down('md')]:{
        display:'block',
    },*/

}));

const LoginButton = styled(Button)({
    color: '#2874f0',
    backgroundColor: '#fff',
    textTransform: 'none',
    padding: '5px 40px',
    borderRadius: '2px',
    boxShadow: 'none',
    fontWeight: 600,
    height: 32,
})


const CustomButtons = () => {
    const [open,setOpen]=useState(false);

    const {account,setAccount}=useContext(DataContext);

    const {cartItems}= useSelector(state=> state.cart);

    const openDialog=()=>{
        setOpen(true);
    }

    
    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount}/>:
                <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
            }
            <Typography style={{width:135,marginTop:3}}>Become a Seller</Typography>
            <Typography style={{marginTop:3}}>More</Typography>
            <Container to="/cart">
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCart/>
                </Badge>
                <Typography style={{marginLeft:10}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}
export default CustomButtons;