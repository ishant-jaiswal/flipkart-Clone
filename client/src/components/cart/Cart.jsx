import { Typography,Grid,Box, styled,Button} from '@mui/material';
import {useSelector} from 'react-redux';
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';

const Container = styled(Grid)(({theme})=>({
    padding: '30px 135px',
    [theme.breakpoints.down('sm')]:{
        padding: '15px 0',
    }

}))

const Header=styled(Box)`
    padding: 15px 24px;
    background:#fff;
`;

const ButtonWrapper=styled(Box)`
    padding:16px 22px;
    background:#fff;
    box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;
const StyledButton=styled(Button)`
    display:flex;
    margin-left:auto;
    background: #fb641b;
    color: #fff;
    width:250px;
    height:51px;
    border-radius:2px;
`;
const LeftComponent=styled(Grid)(({theme})=>({
    paddingRight: 15,
    [theme.breakpoints.down('md')]:{
        marginBottom: 15,
    }

}))

const RightComponent=styled(Grid)(({theme})=>({
    [theme.breakpoints.down('md')]:{
        marginBottom: 15,
        width:'100%',
    }

}))

const Cart=()=>{
    const {cartItems} =useSelector(state=> state.cart);
    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>My Cart ({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item=>(
                                    <CartItem item={item}/>
                                ))
                            }
                            <ButtonWrapper>
                                <StyledButton>Place Order</StyledButton>
                            </ButtonWrapper>
                        </LeftComponent>
                        <RightComponent item lg={9} md={9} sm={12} xs={12}>
                            <TotalView cartItems={cartItems}/>
                        </RightComponent>

                    </Container>
                : <EmptyCart/>
            }
        
        </>
    )
}

export default Cart;