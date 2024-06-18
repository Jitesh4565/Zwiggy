import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            count:0,
            count2:0,
        };
        console.log("Child Constructor");
    }
    componentDidMount(){
        console.log("Child Component Did Mount");
    }
    render(){
         console.log("Child Render");
        const {name,location,contact}=this.props;
        const{count,count2}=this.state;
        return(
            <div className="User-card">
                <h1>Count:{count}</h1>
                <h1>Count2:{count2}</h1>
                <button onClick={()=>{
                   this.setState({
                    count:this.state.count+1,
                    count2:this.state.count2+2
                   });
                }}>Count Increase</button>
                <h2>Name:{name}</h2>
                <h2>location:{location}</h2>
                <h2>Contact:{contact}</h2>
            </div>
        );
    }
}
export default UserClass;