import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Navigation() {
    const navigate = useNavigate();
    useEffect(() => {
        if (true)
            navigate('/Login', {replace: true});
        else
            navigate('/App', {replace: true});
    });
}
