import {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productAction';
import ActionItem from './ActionItem';
import ProductDetails from './ProductDetalis';

import {Box,styled,Grid} from '@mui/material';


const Component=styled(Box)`
    background: #F2F2F2;
    margin-top:55px;
`
const Container=styled(Grid)(({theme})=>({
    background:'#FFFFFF',
    display:'flex',
    [theme.breakpoints.down('md')]:{
        margin:0
    }
}))
const RightContiner=styled(Grid)`
    margin-top: 50px;
    margin-left:10px;

`


const DetailView=()=>{


    const dispatch=useDispatch();
    const {id}=useParams();

    const {loading,product}=useSelector(state => state.getProductDetails);

    useEffect(()=>{
        if(product && id !== product.id)
        dispatch(getProductDetails(id))
    }, [dispatch, id, product, loading])

    return (
        <Component>
            {
                 product && Object.keys(product).length &&
                    <Container container>
                        <Grid item  lg={4} md={4} sm ={8} xs={12}>
                            <ActionItem product={product}/>
                        </Grid>
                        <RightContiner item lg={8} md={8} sm={8} xs={12}>
                             <ProductDetails product={product}/>
                        </RightContiner>
                    </Container>
            }
        </Component>
    )
}

export default DetailView;