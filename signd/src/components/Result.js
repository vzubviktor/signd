import React from "react";

const Result = (props) =>{

    const {repos}  = props;
    // console.log(props);
    const repoResult = repos.map((repo) =>{
        const {id, name, html_url, description} = repo;
        return <div key ={id}>
            {name}
        </div>
    });
    
    
    
    return <>
    <div>
        {repoResult}
    </div>
    </>;
};

export default Result;