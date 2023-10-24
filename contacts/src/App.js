import React, { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import NewContacts from "./components/NewContacts/NewContacts";




function App() {

 
  const[data,setData]=useState([])
  const[post,setPost]=useState({})

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setData(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData("http://localhost:8000/contact")
  },[post])



  return (
    <div className="App">
      <div className="componentdiv">
        <NewContacts post={post} setPost={setPost} fetchData={fetchData}/>
        <ContactList  setData={setData} data={data} fetchData={fetchData}/>
      </div>
    </div>
  );
}

export default App;
