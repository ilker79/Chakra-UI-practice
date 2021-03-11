import React from "react";
;

function DisplayComponent({display, slideValue=0}){


    return (
        <div >       
            <h1 style={{fontSize: `${slideValue}px`}}>{display}</h1>
            <h1>{slideValue}</h1>
        </div>
    )
}

export default DisplayComponent;