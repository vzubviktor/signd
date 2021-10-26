import React, {useState, useEffect} from 'react';
import  {fetchOrgs}  from './api';
import axios from 'axios';



const OrgResult = (props) =>{
    const user  = props.user;
    const [orgs, setOrgs] = useState([])
    const [orgMessage, setOrgMessage] = useState('');


    const handleOrgResult =  async (user) =>{
        if (user && user !== 'username not found') {
            const result = await fetchOrgs(user);
                if (result.length !== 0 ){
                    setOrgs(result);
                    setOrgMessage('list of orgs found ')
                }
                else{
                    setOrgMessage(' no orgs are found');
                    setOrgs([]);
                }
            }

        else {
            setOrgMessage('')
            setOrgs([]);
        }
    }

    useEffect(() =>{
        handleOrgResult(user);
    }, [user])

    
    const orgResult = orgs.map((org) =>{
        const {id, login,  html_url, description} = org;
        return <div key ={id} className = 'org'>
            {login}, {description}
        </div>
    });

    
    return <>
    <div className = 'org-container'>
        <h4>{orgMessage} </h4>
        {orgResult} 
    </div>
    </>;
};

export default OrgResult;
