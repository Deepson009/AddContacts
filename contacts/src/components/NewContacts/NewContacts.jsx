import React, { useState } from "react";
import "./newContacts.css";
import axios from "axios";
function NewContacts({ fetchData }) {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  //  async function postData(newData){
  //    console.log(newData);
  //     await fetch('http://localhost:5000/contact', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newData)
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Post successful:', data);
  //       window.location.reload();

  //     })
  //     .catch(error => {
  //       console.error('Error posting data:', error);
  //       // Handle errors here
  //     });

  //  }

  // function postData(newData) {
  //   fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newData),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       window.location.reload();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  async function postData(newData){
    try {
      const response = await fetch("http://localhost:8000/contact",{
       method:"POST",
       headers:{
        "Content-Type":"application/json"
       },
       body:JSON.stringify(newData)
      })
      const data=await response.json()
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(contactName);
    console.log(contactEmail);
    if (!contactName || !contactEmail) {
      alert("Please fill contact details");
    } else {
      const newData = {
        name: contactName,
        email: contactEmail,
      };
      console.log(newData);
      postData(newData);
      setContactEmail("");
      setContactName("");
    }
  }

  return (
    <div className="newcontacts">
      <div className="container">
        <h3>Please Add Your Contact</h3>
        <form className="formdiv" action="" onSubmit={onSubmit}>
          <div className="inputdiv">
            <label htmlFor="">Name</label>
            <input
              type="text"
              onChange={(e) => {
                setContactName(e.target.value);
              }}
              value={contactName}
            />
          </div>
          <div className="inputdiv">
            <label htmlFor="">Email</label>
            <input
              type="email"
              onChange={(e) => {
                setContactEmail(e.target.value);
              }}
              value={contactEmail}
            />
          </div>
          <div className="btndiv">
            <button className="btn" type="submit">
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewContacts;
