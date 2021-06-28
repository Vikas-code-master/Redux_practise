import React, { useState } from 'react' ;

 const Test = ()=>
{
    const [name , setName] = useState("policy");
    const [printData , setprintData] = useState(false) ;

    const eventHandler = (e)=> {
        setName(e.target.value);
    }
    const addData = ()=>
    {
        console.log ("vikas");
        alert ("hellloooo");
        setName("bazaar");
    }
    return (
        <div>
            <h1>Test component it is</h1>
            {name}
            <button onClick = {addData} > Click me</button>
            <input type = "text" onChange = {eventHandler} placeholder = "write ur name" />
            <div>print button is here</div>
            {
                printData ?
                <h1>{name}</h1>
                : null  
            }
            {/* <button onClick = {()=> setprintData(true)} >show</button>
            <button onClick = {()=> setprintData(false)} >hide</button> */}
            <button onClick = {()=> setprintData(!printData)} >Toggle</button>
        </div>
    )
}
export default Test;