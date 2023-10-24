import React, { useEffect, useState } from "react";
import "./singleContact.css";

function SingleContact({ setData, data, fetchData }) {
  // const deleteContact = (id) => {
  //   console.log("inside delete function");
  //   console.log(id);
  //   fetch(`http://localhost:8000/contact/${id}`, {
  //     method: 'DELETE',
  //   }).then((response) => {
  //       response.json()
  //     }).then((resp)=>{
  //       console.log(resp);
  //       window.location.reload()

  //     })
  //     .catch((error) => {
  //       console.error('Error deleting item:', error);
  //     });
  // }

  async function deleteContact(id) {
    try {
      const response = await fetch(`http://localhost:8000/contact/${id}`,{
          method: 'DELETE',
           });
      const data = await response.json();
      console.log(data);
      window.location.reload() 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="singlecontact">
      {data &&
        data.map((item) => {
          return (
            <div className="singlecontainer" key={item.id}>
              <div className="userdiv">
                <i className=" icon fa-solid fa-user"></i>
              </div>
              <div className="emaildiv">
                <span>{item.name}</span>
                <span>{item.email}</span>
              </div>
              <div className="trasdiv">
                <i
                  className=" thras fa-solid fa-trash-can"
                  onClick={() => deleteContact(item.id)}
                ></i>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default SingleContact;
