import { InputBase,Box, styled,List,ListItem} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';
import { getProducts } from "../../redux/actions/productAction";
import {Link} from 'react-router-dom';


const SearchContainer=styled(Box)({
    display: 'flex',
    background: '#fff',
    width: '38%',
    borderRadius: '2px',
    marginLeft: '10px',
})

const InputSearchBase=styled(InputBase)({
    width: '100%',
    paddingLeft: '20px',
    fontSize: 'unset',
})
const SearchIconWrapper = styled(Box)({
    padding: '5px',
    color: '#2874f0',
    cursor: 'pointer',
    display: 'flex'
})

const ListWrapper=styled(List)({
    position:'absolute',
    background:'#FFFFFF',
    color:'#000',
    marginTop:'36px'

})

const Search=()=>{

    const [text,setText]=useState('');

    const {products}=useSelector(state=>state.getProducts);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    const getText=(text)=>{
        setText(text);
    }

    return (
        <SearchContainer>
            <InputSearchBase
                placeholder="Search for products, brands and more"
                onChange={(e)=>getText(e.target.value)}
                inputProps={{ 'aria-label': 'search' }}
                value={text}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            {
                text &&
                <ListWrapper>
                    {
                        products.filter(product =>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                            <ListItem>
                                <Link to={`/product/${product.id}`} onClick={()=>setText('')}
                                    style={{textDecoration:'none', color:'inherit'}}
                                >
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
            }
        </SearchContainer>
        
    )
}
export default Search;