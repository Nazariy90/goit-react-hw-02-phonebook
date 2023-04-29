import React from 'react';
import { nanoid } from 'nanoid';
import Filter from './filter/Filter';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = ({ name, number }) => {
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts!`);
      return;
    }

    if (name.trim() && number.trim()) {
      const newContact = { id: nanoid(), name, number };
      const newContacts = [...this.state.contacts, newContact];
      this.setState({ contacts: newContacts, name: '', number: '' });
    }
  };

  handleDeleteContact = ({ id }) => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: newContacts });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onFilterChange={this.handleFilterChange}
        />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
