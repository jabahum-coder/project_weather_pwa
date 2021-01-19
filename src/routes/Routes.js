import React, { Component } from "react";
import { Router, Route } from "react-router-dom";


import disticts from '../views/Districts';

export default class Routes extends Component {
    render() {
        return (
            <Router history={disticts}>
                
            </Router>
        )
    }
}