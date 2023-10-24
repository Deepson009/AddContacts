import React, { useEffect, useState } from "react";
import "./contactList.css";
import SingleContact from "../SingleContact/SingleContact";

function ContactList({setData,data,fetchData}) {
  // console.log(data);

  return (
    <div className="contactlist">
      <SingleContact
        setData={setData}
        data={data}
        fetchData={fetchData}
      />
    </div>
  );
}

export default ContactList;
