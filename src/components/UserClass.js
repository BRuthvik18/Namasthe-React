import React from "react";
import {Component} from "react";

// class UserClass extends React.Component{ we can also write like this
class UserClass extends Component{

    constructor(props){
        super(props);
        // console.log("Child Constructor" + this.props.name);

        this.state={
            // count:0,
            // count2:1,
            userInfo:{
                login: "DUmmy",
                location: "Dummmmy",
            },
        };
        

    }
   
      async componentDidMount(){
        
        
        // console.log("Child Component Did Mount "+this.props.name);
        const data= await fetch("https://api.github.com/users/Ruthvik");
        const json= await data.json();
        
        this.setState({
            userInfo:json,
        });
        console.log(json);


    }


    render()
    {
        
        
        // console.log("Child Render  "+this.props.name);
        // const {name,location}=this.props;
        const {login,id,avatar_url}=this.state.userInfo;
        //  const {count2}=this.state;
        
        return (
            <div className="user-class">
                <h1>This is the user based Classy component</h1>
                <h2>My Name is {login}</h2>
                <h3> I am From {id} </h3>
                <img src={avatar_url}/>
                {/* <h4>THis is a Counter1  {this.state.count} </h4>
                <h2>THis is a Counter2  {count2} </h2>
                <button onClick={()=>{
                    this.setState({
                        //Never Do THis count:count+1;, Never update the state objects directly
                        count2:this.state.count2+1,
                    })
                }}>Increment Counter2</button> */}
            </div>
        );
        
    }
componentWillUnmount(){
    //This will be called once we route to different path or route, So it will disount when the component 
    // Here we do the clean up activities so the data is cleared other wise the previous 
    // data like set interval method will be keep on getting called till we clear the interval
    // So if you donot see the component it dosen't mean the data and functions of the component is 
    // cleared, we should confirm from the componentwillunmount where all the resources are cleared or not
    // In useEffect the return method will act like componentWillUnmount in classy component 
}
    
}




export default UserClass;



/*

Parent COnstructor
parent Render

Child Constructor Raam
Child Render Raam

Child constructor Sitha
Child Render Sitha

<DOM Updated In Single Batch Here
Child Component Did Mount Raam
Child Component Did Mount Sitha

Parent component Did Mount


MOUNTING
    Render Phase
       Constructor (Dummy)
       Render (Dummy)
       <HTML Dummy>
       component Did Mount is called and fetches the data from the api and while executing the setState
        it goes into update state
   
    Update Phase
         <Api Call>this.setState triggers again the render is once again
         render <With Api Data>


*/