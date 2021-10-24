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
    <div>
    <form>
        <input className = 'input' 
        value = {username} 
        placeholder = 'Github Username'
        onChange  = {e => setUsername(e.target.value)}/>
            <button className = 'button' onClick = {handleSubmit}>{loading? 'searching...' : 'search'}</button>
        
    </form>
    </div>
    <div>
        <Result repos = {repos} />
    </div>
    </>;
};

export default SearchBar;