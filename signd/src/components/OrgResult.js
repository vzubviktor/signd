import {React, useState} from "react";



const OrgResult = (props) =>{
    const {orgs}  = props;
    const [message, setMessage ] = useState('')
    
    const orgResult = orgs.map((org) =>{
        const {id, login,  html_url, description} = org;
        return <div key ={id} className = 'org'>
            {login}, {description}
        </div>
    });

    

    
    
    return <>
    <div className = 'org-container'>
        <div>{message} </div>
        {orgResult} 
    </div>
    </>;
};

export default OrgResult;
