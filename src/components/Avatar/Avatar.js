import React, { Component } from 'react';
import './App.css';

class Avatar extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let avatarStylePhoto = {
      margin: '40px',
      border: '3px solid #000000',     
      backgroundImage: "url(" + this.props.photo + ")",
      backgroundColor: "#000000",
      backgroundSize: 'cover' 
    };
    let avatarStyleInitials = {
      margin: '40px',
      border: '3px solid #000000',       
      backgroundColor: this.props.backgroundColor,
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center' 
    };
    let initials = {
      color:this.props.initialColor,
      verticalAlign:"middle"
    };
    let large = {
      width:'100px',
      height:'100px',
      fontSize: '50px',
    }
    let medium = {
      width:'60px',
      height:'60px',
      fontSize: '30px',
    }
    let small = {
      width:'40px',
      height:'40px',
      fontSize: '20px',
    }
    let circle = {
      borderRadius:'50px'
    }
    let square = {
      borderRadius:'0'
    }
    let size = this.props.size;
    let shape = this.props.shape;
    let photoClass = avatarStylePhoto;
    let initialClass= avatarStyleInitials;

    if(size == "small" && shape=="circle"){
      photoClass = Object.assign(photoClass,small,circle);
      initialClass = Object.assign(initialClass,small,circle);
    }
    else if(size == "small" && shape=="square"){
      photoClass = Object.assign(photoClass,small,square);
      initialClass = Object.assign(initialClass,small,square);
    }
    else if(size == "large" && shape=="circle"){
      photoClass = Object.assign(photoClass,large,circle);
      initialClass = Object.assign(initialClass,large,circle);
    }
    else if(size == "large" && shape=="square"){
      photoClass = Object.assign(photoClass,large,square);
      initialClass = Object.assign(initialClass,large,square);
    }
    else if(size == "medium" && shape=="circle"){
      photoClass = Object.assign(photoClass,medium, circle);
      initialClass = Object.assign(initialClass,medium, circle);
    }
    else if(size == "medium" && shape=="square"){
      photoClass = Object.assign(photoClass,medium, square);
      initialClass = Object.assign(initialClass,medium, square);
    }
    
    return (
      <div>
        {this.props.photo != null ? 
        <div style={ photoClass} >      
        </div>
        :
        <div style={initialClass} > 
          <p style={initials}>{this.props.initials}</p>
        </div>
        }
      </div>

    );
  }
}

export default Avatar;




















