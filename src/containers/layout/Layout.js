import React, { Component } from 'react'
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Home from '../../components/home/Home'
import Nav from '../../components/nav/Nav'
import Slider from '../../components/slider/Slider'

export default class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav /> 
                <Switch>
                    <Route path='/' exact component={Home} />
                </Switch>
            
            </BrowserRouter>
        )
    }
}
