import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {

  const contacts = [
    {
      id: "1",
      "name": "Alok",
      "email": "aks@gmail.com",
    },
    {
      id: "2",
      "name": "kumar",
      "email": "aks2@gmail.com",
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      {/* using props */}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
