import React, {Component} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom" 
import Home from './home/OrganicMarket';
import Favourite from './favourite/favour';


export default class Routswitch extends Component{
    render(){

    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/favourite' element={<Favourite/>}/>
                </Route>  
            </Routes>
        </BrowserRouter>
    )

}}