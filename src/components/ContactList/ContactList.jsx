import s from './contactList.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useDeleteContactsMutation } from '../redux/phonebook/phonebookApi';
import { Rings } from 'react-loader-spinner';
import { getFilterContacts } from '../redux/phonebook/phonebook-selectors';

const ContactList = ({ contacts }) => {
  const contactsFilter = useSelector(state =>
    getFilterContacts(state, contacts),
  );
  const dispatch = useDispatch();

  const [deleteContacts, { isLoading }] = useDeleteContactsMutation();

  // const removeContacts = id => dispatch(actions.deleteContact(id));

  return (
    <>
      {contactsFilter.map(({ id, name, phone }) => {
        return (
          <div key={id}>
            <>
              <p name={name}>
                {name} {phone}
              </p>
              <button onClick={e => deleteContacts(id)} disabled={isLoading}>
                {isLoading && <Rings color="#00BFFF" height={15} width={15} />}
                Delete
              </button>
            </>
          </div>
        );
      })}
    </>
  );
};

export default ContactList;
