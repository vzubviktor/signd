import React, {useState} from 'react';
import  {fetchOrgs, fetchRepos, fetchUser}  from './api';
import RepoResult from './RepoResult';
import OrgResult from './OrgResult';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


const SearchBar = () =>{

    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [repos, setRepos] = useState([]);
    const [orgs, setOrgs] = useState([]);
   
    

   

    const handleSubmit = async (e) =>{
        

        e.preventDefault();
        setLoading(true);
        const userResult = await fetchUser(username);
        
        if (userResult) {
            const repoResult = await fetchRepos(username);
            setRepos(repoResult);
            const orgResult = await fetchOrgs(username);
            setOrgs(orgResult);
            setMessage('user found')
            
            

            }
        else {
            setMessage('user not found')
            setRepos([]);
            setOrgs([]);

           
            
        }
        setLoading(false);

     
    };

    const Spinner = () =>{
        return <div className = 'spinner'>
            <Loader type="TailSpin" color="#00BFFF" height={200} width={200} />
        </div>
    };



    return <> 
    <nav className ="navbar navbar-light bg-light">
        <div className="container-fluid">
            <form className="d-flex"  >
                <input className = "form-control me-2"
                type="search"
                value = {username} 
                placeholder = 'Github Username'
                onChange  = {e => setUsername(e.target.value)}/>
                    <button className = "btn btn-outline-success" type="submit" onClick = {handleSubmit}>{loading? 'searching...' : 'search'}</button>
                
            </form>
        </div>
    </nav> 
    <div className = 'output'>{loading? <Spinner />  : <>
                                                            <div className  = 'container'>{message}</div> 
                                                            <div className="container">
                                                                <div className="row">
                                                                    <RepoResult repos = {repos} message = {message} /> 
                                                                    <OrgResult orgs = {orgs} message = {message}/>
                                                                </div>
                                                            </div>
                                                        </>
                              }
           
        
    </div>
    </>;
};

export default SearchBar;