import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      count: this.props.maxChars
    };
    console.log(this.props.maxChars)
  }
  handleChange=(event)=>{
   
    this.setState({
    
      message: event.target.value
    })
    
    // counter = (event) => {
    //   this.setState(previousState => {
        
    //     return {
    //       count: previousState - event.target.value.length
    //     }
    //   })
    // }
  }
//   counter=()=>{
//     this.setState({
//       count: this.props - 1
//     })
// console.log(this.props)
//   }

  render() {
    let num = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        value={this.state.message}
        onChange={event=>this.handleChange(event)}
        type="text" 
        name="message" 
        id="message" />
        <span>You have {num} characters remaining</span>
      </div>
    );
  }
}

export default TwitterMessage;
