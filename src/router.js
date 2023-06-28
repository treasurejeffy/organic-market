import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom" ;
import Favourite from './favourite/favour';
import Home from './home/OrganicMarket';
import CheckOut from './checkOut/checkOut';

export default function RouteSwitch() {
    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/favourite' element={<Favourite/>}/>
                    <Route path='/checkOut' element={<CheckOut/>}/>
                </Route>  
            </Routes>
        </BrowserRouter>
    )
}