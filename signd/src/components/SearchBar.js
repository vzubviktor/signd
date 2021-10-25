import React, {useState} from 'react';
import  fetchRepos  from './api';
import Result from './Result';

const SearchBar = () =>{

    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoading(true);
        fetchRepos(username)
        .then(res =>{
            setLoading(false);
            setRepos(res.data);
            
        });
        


    };



    return <>
    <nav class="navbar navbar-light bg-light">
    <div className="container-fluid">
    <form className="d-flex">
        <input className = "form-control me-2"
        type="search"
        value = {username} 
        placeholder = 'Github Username'
        onChange  = {e => setUsername(e.target.value)}/>
            <button className = "btn btn-outline-success" type="submit" onClick = {handleSubmit}>{loading? 'searching...' : 'search'}</button>
        
    </form>
    </div>
    </nav>
    <div>
        <Result repos = {repos} />
    </div>
    </>;
};

export default SearchBar;