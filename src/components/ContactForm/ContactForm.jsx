import s from './contactForm.css';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../redux/phonebook/phonebook-actions';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/phonebook/phonebook-selectors';
import { useAddCotactsMutation } from '../redux/phonebook/phonebookApi';

const ContactForm = ({ contacts }) => {
  const [addCotacts, { isLoading, isSuccess }] = useAddCotactsMutation();
  const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onInput = e => {
    const { name, value } = e.target;
    // this.setState({ [name]: value });

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const newName = {
      name,
      phone,
    };

    const searchSameName = contacts.map(cont => cont.name).includes(name);
    if (searchSameName) {
      alert(`${name} is already in contacts`);
    } else if (name.length === 0) {
      alert('Fields must be filled!');
    } else {
      addCotacts(newName);
      resetForm();
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={onInput}
          autoComplete="off"
        />
      </label>
      <label>
        <span>Tel</span>
        <input
          type="tel"
          name="number"
          value={phone}
          placeholder="Enter Tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
          onChange={onInput}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
