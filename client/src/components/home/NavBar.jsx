import { Box,styled, Typography } from '@mui/material';    

import { navData } from '../../constants/data';

const Component = styled(Box)(({theme})=>({
    display: 'flex',
    margin: '0 130px 0 130px',
    justifyContent: 'space-between',
    overflow:'hidden',
    //overflow:'overlay',
     [theme.breakpoints.down('lg')]:{
       margin: '0 0 0 0',
    }

}));

const Container=styled(Box)`
    padding:12px 8px;
    text-align:center;
`

const Text=styled(Typography)`
    font-size:14px;
    font-Weight:600;
    font-family:inherit;
`


const NavBar=()=>{
    return (
        <Box style={{background:'#fff'}}> 
            <Component>
            {navData.map((data) => (
                <Container key={data.id}>
                    <img src={data.url} alt={data.title} style={{width:64}} />
                    <Text>{data.text}</Text>
                </Container>
            ))}
        </Component>
        </Box>
    )
}
export default NavBar;