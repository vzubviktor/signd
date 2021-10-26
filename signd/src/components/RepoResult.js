import React from "react";

const RepoResult = (props) =>{

    const {repos}  = props;
    // console.log(props);
    const repoResult = repos.map((repo) =>{
        const {id, name, html_url, description} = repo;
        return <div key ={id} className = 'row'>
            {name}
        </div>
    });
    
    
    
    return <>
    <div className = 'repo-container'>
        {repoResult}
    </div>
    </>;
};

export default RepoResult;