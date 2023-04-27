import React from 'react';
import { nanoid } from 'nanoid';
import css from './form.module.css';

class Form extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleAddContact = () => {
    const { name, number } = this.state;
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

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: newContacts });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    const contactItems = filteredContacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button
          type="button"
          onClick={() => this.handleDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ));

    return (
      <div>
        <form>
          <h2 className={css.title}>Name</h2>
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          />

          <h2 className={css.title}>Number</h2>
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={event => this.setState({ number: event.target.value })}
            required
          />

          <button
            type="button"
            className={css.button}
            onClick={this.handleAddContact}
            disabled={!this.state.name || !this.state.number}
          >
            Add contact
          </button>
        </form>

        <h2 className={css.title}>Contacts</h2>

        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="username"
          value={this.state.filter}
          onChange={this.handleFilterChange}
        />

        <ul>{contactItems}</ul>
      </div>
    );
  }
}

export default Form;
