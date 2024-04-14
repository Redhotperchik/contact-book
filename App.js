import React, { useState } from "react";
import ContactList from './ContactsList'
import Contact from "./Contact";


function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addContact = (event) => {
    event.preventDefault();
    if (!name || !phone) {
      alert('Please, insert your name and phone number.');
      return;
    }
    
    const newContact = {
      id: contacts.length + 1,
      name,
      phone,
    };
    setContacts(contacts.concat(newContact));
    setName('');
    setPhone('');
  };
  
  return (
    <div className="App">
      <ContactList />
      <Contact />
      <form onSubmit={addContact}>
        <input className="contact-name"
          type="text"
          value={name}
          onChange={(e) =>
            setName(e.target.value)}
          placeholder="Name"
          required />
        <input className="contact-phone"
          type="tel"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)}
            placeholder="Phone number"
          required />
        <button type="submit">Add contact</button>
      </form>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
