import { AppBar, Toolbar,styled,Box,Typography, IconButton,Drawer,List,ListItem} from '@mui/material';
import {useState} from 'react';
import {Menu} from '@mui/icons-material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import {Link} from 'react-router-dom';

const StyledAppbar = styled(AppBar)({
    background: '#2874f0',
    height: '55px',
} )

const Component = styled(Link)({
    marginLeft: '12%',
    lineHeight: 0,
    textDecoration:'none',
    color:'inherit'
})

const SubHeading = styled(Typography)({
    fontSize: '10px',
    fontStyle: 'italic',
})

const PlusImage = styled('img')({
    width:'10px',
    height:'10px',
    marginLeft: 4,

});

const CustomButtonsWrapper = styled(Box)(({theme})=>({
    margin:'0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display:'none',
    },
}));

const MenuButton=styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block',
    },

}));

const Header=()=>{
    const logoURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

    const [open, setOpen]=useState(false);
    const handleOpen = ()=>{
        setOpen(true);
    }
    const handleClose = ()=>{
        setOpen(false);
    }
    const list=()=>(
        <Box style={{width:200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>
    )


    return (
        <StyledAppbar position="sticky">
            <Toolbar style={{minHeight: 55}}>
                <MenuButton color="inherit" onClick={handleOpen}> 
                    <Menu/>
                </MenuButton>
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Component to='/'>
                    <img alt="logo" src={logoURL} style={{width:75}}/>
                    <Box style={{display:'flex'}}>
                        <SubHeading>Explore&nbsp; 
                            <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                        </SubHeading>
                        <PlusImage alt="sublog" src={subURL}/>
                    </Box>
                </Component>
                <Search />
                <CustomButtonsWrapper>
                    <CustomButtons />
                </CustomButtonsWrapper>
            </Toolbar>
        </StyledAppbar>
    );
}
export default Header;