import './style/App.css';
import React, {useEffect, Suspense} from "react";
import {useNavigate} from "react-router-dom";
import LoadingData from "./LoadingData";


export default function App(props) {
    const navigate = useNavigate();
    useEffect(() => {
        if(!props.state.isUserAuthenticated)
            navigate('/Login', {replace: true});
    });

    if(props.state.isUserAuthenticated){
       return(
           <div>
               <Suspense fallback={<span id={"app-logo"}>Loading ...</span>}>
                   <LoadingData />
               </Suspense>
           </div>
           );
    }

}
