import React, {useState} from 'react';
import  {fetchOrgs, fetchRepos, fetchUser}  from './api';
import RepoResult from './RepoResult';
import axios from 'axios';
import OrgResult from './OrgResult';


const SearchBar = () =>{

    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [orgs, setOrgs] = useState([]);
    const [user, setUser] = useState('');
    const [repoMessage, setRepoMessage] = useState('');
    const [orgMessage, setOrgMessage] = useState('');

    const handleRepoResult =  async (username) =>{
        
        const repoResult = await fetchRepos(username);
        if (repoResult.length != 0){
            
            setRepos(repoResult);
            setRepoMessage('list of repos found ')
        }
        else{
            setRepoMessage(' no repos are found');
            setRepos([]);
            
        }
        
        
    }

    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        setLoading(true);
        const userResult = await fetchUser(username);
        setLoading(false);
        
        if (userResult) {
            setUser(username); 
            handleRepoResult(username);

            
            
          
           }
        else {
            setRepos([]);
            setUser('username not found');
            setRepoMessage('')
        }
     
    };



    return <>
    <nav className ="navbar navbar-light bg-light">
    <div className="container-fluid">
    <form className="d-flex" >
        <input className = "form-control me-2"
        type="search"
        value = {username} 
        placeholder = 'Github Username'
        onChange  = {e => setUsername(e.target.value)}/>
            <button className = "btn btn-outline-success" type="submit" onClick = {handleSubmit}>{loading? 'searching...' : 'search'}</button>
        
    </form>
    </div>
    </nav>
    <div className  = 'user'>
        {user}
    </div>
    <div className = 'result' >
        <div> 
            <h4> {repoMessage} </h4>
            <RepoResult repos = {repos} />
            </div>
        <div>
            <h4> {orgMessage} </h4>
            <OrgResult orgs = {orgs} /></div>
    </div>
    </>;
};

export default SearchBar;