import React, { Component } from 'react'
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import CheckOutPage from '../../components/checkOut/CheckOutPage'
import Home from '../../components/home/Home'
import Nav from '../../components/nav/Nav'
import Products from '../../components/products/Products'
import Footer from '../../components/footer/Footer'
export default class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav /> 
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/product'  component={Products} />
                    <Route path='/checkout' component={CheckOutPage}/>
                </Switch>
                {/* <Footer/> */}
            
            </BrowserRouter>
        )
    }
}
