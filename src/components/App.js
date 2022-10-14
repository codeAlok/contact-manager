import React, {useState} from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {
  // using useState => React Hooks
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact)=> {
    console.log(contact);
  }

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler= {addContactHandler}/>
      {/* using props */}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
