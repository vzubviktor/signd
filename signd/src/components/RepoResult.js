import React, {useState, useEffect} from 'react';
import  {fetchOrgs, fetchRepos, fetchUser}  from './api';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


const RepoResult = (props) =>{

    const repos  = props.repos;
    let message  = props.message

    if (message === 'user found' && repos.length === 0 ){
        message = 'no repos found '
    }

    if (message === 'user found' && repos.length > 0  ){
        message = ' repos found'
    }
    if (message ==='user not found'){
        message = ''
    }

        

     const repoResult = repos.map((repo) =>{
            
            const {id, login,  name, html_url, description} = repo;
            return <div className = "row">
                    {name}
                </div>
                   
        });



    
    


    
    // console.log(props);
  
    
    
    
    return     <div className="col">
                    <h4>{message}</h4>
                      {repoResult}
                </div>
                 
         
    
    
};

export default RepoResult;