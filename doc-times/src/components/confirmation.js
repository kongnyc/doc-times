import React from 'react';
import { useLocation} from "react-router-dom"

const Confirmation =(props)=>{
    let location = useLocation();
console.log(location.userProps)
console.log(props.location);;

    return (
        <div>
        <h1>Confirmation Page</h1>
        <p>

        {/* {location} */}

        </p>
    </div>
    )
};

export default Confirmation