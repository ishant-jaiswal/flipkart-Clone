
import { useEffect } from "react";
import { Fragment } from "react";

import MidSection from "./MidSection";
import NavBar from "./NavBar";
import Banner from "./Banner";
import MidSlide from './MidSlide';
import Slide from './Slide';

import {Box,styled} from '@mui/material';

import {getProducts} from '../../redux/actions/productAction';
import {useDispatch, useSelector} from 'react-redux';

const Components=styled(Box)`
    padding:7px 3px;
    background:#F2F2F2;
`

const Home=()=>{

    const {products}=useSelector(state=>state.getProducts);
    console.log(products);

    const dispatch=useDispatch();

    useEffect(()=> {
        dispatch(getProducts())
    },[dispatch])

    return (
        <Fragment>
            <NavBar />
            <Components>
                <Banner/>
                <MidSlide products={products} title="Deal of the Day" timer={true}/>
                <MidSection/>
                <Slide products={products} title="Discount for You" timer={false}/>
                <Slide products={products} title="Suggesting Items" timer={false}/>
                <Slide products={products} title="Top Selection" timer={false}/>
                <Slide products={products} title="Recommended Item" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
                <Slide products={products} title="Season's top picks" timer={false}/>
                <Slide products={products} title="Top Deals on Accessories" timer={false}/>
            </Components>
        </Fragment>
        
    )
}
export default Home;