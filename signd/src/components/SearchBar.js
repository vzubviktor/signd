import React, {useState} from 'react';
import  {fetchOrgs, fetchRepos, fetchUser}  from './api';
import RepoResult from './RepoResult';
import OrgResult from './OrgResult';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


const SearchBar = () =>{

    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [orgs, setOrgs] = useState([]);
    const [user, setUser] = useState('');
   
    

   

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

    const Spinner = () =>{
        return <div className = 'spinner'>
            <Loader type="TailSpin" color="#00BFFF" height={200} width={200} />
        </div>
    };

    const ResultField =  (props) =>{
        const user = props.user;
        return <>
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
        </>
    }



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
    <div className = 'output'>{loading? <Spinner /> : <ResultField user  ={user} />}
           
        
    </div>
    </>;
};

export default SearchBar;