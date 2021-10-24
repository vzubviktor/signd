import React from "react";

const Result = (props) =>{

    const repos  = props.repos;
    
    
    return <>
    <div>
        {repos}
    </div>
    </>;
};

export default Result;