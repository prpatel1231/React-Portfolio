import React from "react";
import "./style.css";

function ContactForm(props){
  return(
    <form 
      onSubmit={props.handleContactSubmit}
    >
      <i className="material-icons">person</i><label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={props.handleInputChange}></input>
      <i className="material-icons">email</i><label htmlFor="email">Email</label>
      <input type="email" id="email" onChange={props.handleInputChange}></input>
      <i className="material-icons">message</i><label htmlFor="message">Message</label>
      <textarea className="materialize-textarea" id="message" onChange={props.handleInputChange}></textarea>
      <button className="btn" type="submit">Submit</button>
      <button className="btn" onClick={props.clearForm}>Clear</button>
    </form>
  );
};

export default ContactForm;