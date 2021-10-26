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
    

   

    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        setLoading(true);
        const userResult = await fetchUser(username);
        setLoading(false);
        
        if (userResult) {
            setUser(username); 
            }
        else {
            setRepos([]);
            setUser('username not found');
            
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
            <RepoResult user = {user} />
        </div>
        <div>
            <OrgResult user = {user} />
        </div>
    </div>
    </>;
};

export default SearchBar;