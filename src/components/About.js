import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }
    render(){
        console.log("Parent Render");
        return (
        <div>
        <h1>The below component is Functional Based Component</h1>
        {/* <User name={"Raam"} location={"Ayodhya"} /> */}
        <hr/>
            <h1>The Below Component is Classy Component</h1>
            <UserClass name= {"Raam"} location={"Ayodhyaa"} />
            {/* <UserClass name= {"Sitha"} location={"Mithila"} /> */}
            {/* <UserClass/> */}
        </div>
        )
    }
    componentDidMount(){
        console.log("Parent Component Did Mount");
    }
}
// const About=()=>{
//     return (
//         <div>
//         <h1>The below component is Functional Based Component</h1>
//         {/* <User name={"Raam"} location={"Ayodhya"} /> */}
//         <hr/>
//             <h1>The Below Component is Classy Component</h1>
//             <UserClass name= {"Sitha"} location={"Mithila"} />
//         </div>
//     )
// }
export default About;