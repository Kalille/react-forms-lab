import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }
  handleUserName=(event)=>{
   this.setState({
      username: event.target.value,
      
   })
    
  }
  handlePassword=(event)=>{
    this.setState({
       
       password: event.target.value,
    })
     
   }
  handleSubmit=(event)=>{
    event.preventDefault()
   if(!this.state.username || !this.state.password){
     return ""
   }
   else {
     return this.props.handleLogin(this.state.username, this.state.password)
   }
  
  }

  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text" 
            value={this.state.username}
            onChange={this.handleUserName}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password" 
            value={this.state.password} 
            onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
