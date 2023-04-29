import React from 'react';

class ContactList extends React.Component {
  getFilteredContacts = ({ filter, contacts }) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter, onDeleteContact } = this.props;
    const filteredContacts = this.getFilteredContacts({ filter, contacts });

    const handleDeleteContact = id => onDeleteContact({ id });

    return (
      <div>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    );
  }
}

export default ContactList;
