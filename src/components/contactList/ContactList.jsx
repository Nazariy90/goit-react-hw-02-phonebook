import React from 'react';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
