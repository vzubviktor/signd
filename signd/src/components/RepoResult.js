import React, {useState, useEffect} from 'react';
import  {fetchOrgs, fetchRepos, fetchUser}  from './api';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


const RepoResult = (props) =>{

    const user  = props.user;
    const [repos, setRepos] = useState([]);
    const [repoMessage, setRepoMessage] = useState('');
    const [loading, setLoading]  = useState(false);



    const Spinner = () =>{
        return <div className = 'spinner'>
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80}  />
        </div>
    };
    
    const ResultField = () =>{
     
     return <div className = 'repo-container'>
                 <h4>{repoMessage}</h4>
                      {repoResult}
            </div> 
     };

     const repoResult = repos.map((repo) =>{
        const {id, name, html_url, description} = repo;
        return <div key ={id} className = 'row'>
            {name}
        </div>
    });


    
    const handleRepoResult =  async (user) =>{
        if (user && user !== 'username not found') {
            
           
            setLoading(true);
            const result = await fetchRepos(user);

                if (result.length !== 0 ){
                    setRepos(result);
                    setRepoMessage('list of repos found ')
                    setLoading(false);
                   
                }
                else{
                    setRepoMessage(' no repos are found');
                    setRepos([]);
                    setLoading(false);
                    
                }
            
            
            }

        else {
            setRepoMessage('')
            setRepos([]);
        }
    }

    useEffect(() =>{
        handleRepoResult(user);
        return () => setLoading(false);

        
    }, [user])


    


    
    // console.log(props);
  
    
    
    
    return <>
    {loading? <Spinner /> : <ResultField />}
    
    </>;
};

export default RepoResult;