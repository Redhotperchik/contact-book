import React from "react";
import Contact from './Contact';
export default ContactList;

function ContactList({ contacts })
{
    if (!contacts) {
        return <div>No contacts to display.</div>;
    }
    
    return (
        <ul>
            {contacts.map((contact) => (<Contact key={contact.id}
                name={contact.name}
                phone={contact.phone} />
            ))}
        </ul>
    );
}

