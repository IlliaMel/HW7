import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {render} from "@testing-library/react";
import DayCard from "./DayCard";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserAuthenticated: true
        };
    }
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login state={this.state}/>} />
                    <Route path="/Login" element={<Login state={this.state}/>} />
                    <Route path="/App" element={<App state={this.state}/>} />
                </Routes>
            </BrowserRouter>
        );

    }
}

//<Route path="/" element={<Login state={this.state}/>} />
render(<Index />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
