import React, {useState} from 'react';
import  {fetchRepos, fetchUser}  from './api';
import RepoResult from './RepoResult';
import axios from 'axios';
import OrgResult from './OrgResult';


const SearchBar = () =>{

    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [orgs, setOrgs] = useState([]);
    const [user, setUser] = useState('');


    const handleSubmit = async (e) =>{
        
        e.preventDefault();
        setLoading(true);
        const result = await fetchUser(username);
        setLoading(false);
        
        if (result) {
            setUser(username); 
            fetchRepos(username)
            .then(res => setRepos(res));
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
    <div>{user}</div>
    <div>
        <RepoResult repos = {repos} />
        <OrgResult />
    </div>
    </>;
};

export default SearchBar;