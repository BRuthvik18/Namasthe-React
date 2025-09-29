import  { useState } from "react";
const User=({name,location})=>{

    const [count,setCount]=useState(0);

    return (
        <div className="user-func">

            <h1> THis is the User Component i.e Functional component</h1>
            <h2> Hi THis Is your {name}</h2>
            <h3>   Location is from {location}..</h3>
            <h4>This is a Counter.{count}</h4>
            <button onClick={()=>{setCount(count+1)}}>Increment Counter</button>
        </div>
    )
}
export default User;