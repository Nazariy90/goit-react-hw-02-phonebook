import React from 'react';
import { nanoid } from 'nanoid';
import css from './form.module.css';

class Form extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  //   handleNumberChange = event => {
  //     this.setState({ number: event.target.value });
  //   };

  handleAddContact = () => {
    const { name, number } = this.state;
    if (name.trim() && number.trim()) {
      const newContact = { id: nanoid(), name, number };
      const newContacts = [...this.state.contacts, newContact];
      this.setState({ contacts: newContacts, name: '', number: '' });
    }
  };

  render() {
    const contactItems = this.state.contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
      </li>
    ));

    return (
      <div>
        <div className={css.wrapper}>
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
        </div>
        <h2 className={css.title}>Contacts</h2>

        <ul>{contactItems}</ul>
      </div>
    );
  }
}

export default Form;
