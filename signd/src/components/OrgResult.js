import React, {useState, useEffect} from 'react';




const OrgResult = (props) =>{
    const orgs  = props.orgs;
    let message  = props.message

    if (message === 'user found' && orgs.length === 0 ){
        message = 'no orgs found '
    }

    if (message === 'user found' && orgs.length > 0  ){
        message = ' orgs found'
    }

    if (message ==='user not found'){
        message = '';
    }
    console.log(orgs)

    
        

     const orgResult = orgs.map((org) =>{
            
            const {id, name, login,  html_url, description} = org;
            return <div key ={id} className = 'row'>
                {login}
            </div>
        });



    
    


    
    // console.log(props);
  
    
    
    
    return <>
    <div className = 'repo-container'>
                 <h4>{message}</h4>
                      {orgResult}
            </div> 
    
    </>;
};

export default OrgResult;
