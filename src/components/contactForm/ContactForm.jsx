import React from 'react';
import PropTypes from 'prop-types';
import css from '../app.module.css';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  render() {
    const { onAddContact } = this.props;
    const { name, number } = this.state;

    const handleAddContact = () => {
      onAddContact({ name, number });
      this.setState({ name: '', number: '' });
    };

    return (
      <form>
        <h2 className={css.title}>Name</h2>
        <label>
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
        </label>
        <h2 className={css.title}>Number</h2>
        <label>
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleNumberChange}
            required
          />
        </label>

        <button
          type="button"
          className={css.button}
          onClick={handleAddContact}
          disabled={!this.state.name || !this.state.number}
        >
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
