import './App.css';

// components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';

import DataProvider from './context/DataProvider';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';

//import { Box } from '@mui/material';


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{marginTop:0}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailView/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
