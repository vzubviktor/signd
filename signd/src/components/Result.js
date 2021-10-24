import React from "react";

const Result = (props) =>{

    const {repos}  = props;
    console.log(props);
    const repoResult = repos.map((repo) =>{
        const {id, name, description} = repo;
        return <div key ={id}>
            <p> repo name : {name} </p>
            <p> description : {description}</p>
        </div>
    });
    
    
    
    return <>
    <div>
        {repoResult}
    </div>
    </>;
};

export default Result;