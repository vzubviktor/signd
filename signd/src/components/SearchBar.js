import React, {useState} from 'react';

const SearchBar = () =>{

    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();


    };



    return <>
    <div>
    <form>
        <input className = 'input' 
        value = {username} 
        placeholder = 'Github Username'
        onChange  = {e => setUsername(e.target.value)}/>
            <button className = 'button' onClick = {handleSubmit}>search</button>
        
    </form>
    </div>
    </>;
};

export default SearchBar;