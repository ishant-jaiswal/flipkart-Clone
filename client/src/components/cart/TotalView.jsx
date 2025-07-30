import { Box, styled, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
    & > h6 {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 600;
    }
`;

const Price = styled(Box)`
    float: right;
    color: green;
`;

const Discount = styled(Typography)`
    color: green;
    font-weight: 600;
`;

const TotalView = ({ cartItems }) => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [cartItems]);

    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.forEach(item => {
            price += item.price.mrp;
            discount += item.price.mrp - item.price.cost;
        });
        setPrice(price);
        setDiscount(discount);
    };

    const deliveryCharges = 40;

    return (
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>Price ({cartItems?.length} item)
                    <Price component="span">₹{price}</Price>
                </Typography>
                <Typography>Discount
                    <Price component="span">-₹{discount}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">₹{deliveryCharges}</Price>
                </Typography>
                <Typography variant="h6">Total Amount
                    <Price component="span">₹{price - discount + deliveryCharges}</Price>
                </Typography>
                <Discount>You will save ₹{discount} on this order</Discount>
            </Container>
        </Box>
    );
};

export default TotalView;
