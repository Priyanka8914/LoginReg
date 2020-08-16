import React, { Component } from 'react';
import './Logregistration.css';


 class Logregistration extends Component {

    constructor(props)
    {
        super();
        this.state = {
            
            username: "",
            password: "123",
            firstname: " ",
            lastname: "c",
            number: "34343434",
            email: "piya@gmial.com",
            gender: "female",
            cpassword: "123"
        }
    }

    handleusername = (event) => {
        this.setState({username: event.target.value })
    }  

    handlefirstname = (event) => {
        this.setState({firstname: event.target.value })
    }  

     handlelastname = (event) => {
        this.setState({lastname: event.target.value })
    }  

     handlecontactnumber = (event) => {
        this.setState({number: event.target.value })
    }  

     handleemail = (event) => {
        this.setState({email: event.target.value })
    }  

    handlegender = (event) => {
        this.setState({gender: event.target.value })
    }  

    handlepassword = (event) => {
        this.setState({password: event.target.value })
    }  

    handlecpassword = (event) => {
        this.setState({cpassword: event.target.value })
    }  

    handlelsubmit = (event) => {
        alert(`username is ${this.state.username}`);
        event.preventDefault();
    }

     handlersubmit = (event) => {
        alert(`firstname is ${this.state.firstname} , lastname is ${this.state.lastname} , 
               contactnumber is ${this.state.contactnumber} , email is ${this.state.email} ,
               Email is ${this.state.email} , gender is ${this.state.gender}`);
        event.preventDefault();
    }
    
    login()
    {
        console.warn("state",this.state)
        //alert("Your file is being uploaded!")
    }

     register()
    {
        console.warn("state",this.state);
        //alert("Your file is being uploaded!")
    }

   
    render() {
        return (
         
            <div className="main">
                
                <div className="wrap">
                <h1>Login</h1>
                    <form onSubmit = {this.handlelsubmit}>
                    <input type="text" placeholder="username"
                    onChange={this.handleusername}/>
                    <br /><br />
                    <input type="text" 
                    placeholder="password"
                    onChange={this.handlepassword}/>
                    <br /><br />
                    <button type="submit" onClick={()=>this.login()}>Login</button>
                    
                    </form>
                </div>
                :
                <form onSubmit = {this.handlersubmit}>
                <div className="wrap">
                    
                    <input type="text" 
                    placeholder="firstname"
                    onChange={this.handlefirstname}/>
                    <br />< br />

                    <input type="text" 
                    placeholder="lastname"
                    onChange={this.handlelastname}/>
                    <br /><br />

                    <input type="phone" 
                    placeholder="contact number"
                    onChange={this.handlecontactnumber}/>
                    <br /><br />

                    <input class="email" type="text" 
                    placeholder="email"
                    onChange={this.handleemail}/>
                    <br /><br />

                    <input type="text" 
                    placeholder="gender"
                    onChange={this.handlegender}/>
                    <br /><br />

                    <input type="text" 
                    placeholder="password"
                    onChange={this.handlepassword}/>
                    <br /><br />

                    <input type="text" 
                    placeholder="confirm password"
                    onChange={this.handlecpassword}/>
                    <br /><br />

                    <button type="submit" onClick={()=>this.register()}>Register</button>
                    
                    </div>
                    </form>
                    </div>
                       
        );
        
         }
    }
    


export default Logregistration;
