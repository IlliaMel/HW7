import './style/Login.css';
import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import App from "./App";
import {useNavigate} from "react-router-dom";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        //user@gmail.com
        //1111
        if(email === "user@gmail.com" && password === "1111"){
            props.state.isUserAuthenticated = true;
            navigate('/App', {replace: true});
        }else if (email !== "user@gmail.com"){
            alert("Email is wrong")
        }else if (password !== "1111"){
            alert("Password is wrong")
        }
    }

    return (
        <div className="login-box">
            <div className="login-tittle-box">
                <h1>LOGIN</h1>
                <h2>Welcome to WeatherBit</h2>
            </div>
            <Form className="login-form" onSubmit={handleSubmit}>
                <Form.Group className="login-form-group" size="lg">
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control
                        id="control-email-id"
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group  >
                <Form.Group className="login-form-group" size="lg">
                    <Form.Label>PASSWORD</Form.Label>
                    <Form.Control
                        id="control-password-id"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </Form.Group>
                <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
                    LOGIN
                </Button>
            </Form>
        </div>
    );
}
