import React, {useState, useEffect} from 'react';
import  {fetchOrgs, fetchRepos, fetchUser}  from './api';
import axios from 'axios';



const RepoResult = (props) =>{

    const user  = props.user;
    const [repos, setRepos] = useState([]);
    const [repoMessage, setRepoMessage] = useState('');


    
    const handleRepoResult =  async (user) =>{
        if (user && user !== 'username not found') {
            const result = await fetchRepos(user);
                if (result.length !== 0 ){
                    setRepos(result);
                    setRepoMessage('list of repos found ')
                }
                else{
                    setRepoMessage(' no repos are found');
                    setRepos([]);
                }
            }

        else {
            setRepoMessage('')
            setRepos([]);
        }
    }

    useEffect(() =>{
        handleRepoResult(user);
    }, [user])


    
    // console.log(props);
    const repoResult = repos.map((repo) =>{
        const {id, name, html_url, description} = repo;
        return <div key ={id} className = 'row'>
            {name}
        </div>
    });
    
    
    
    return <>
    <div className = 'repo-container'>
        <h4>{repoMessage}</h4>
        {repoResult}
    </div>
    </>;
};

export default RepoResult;