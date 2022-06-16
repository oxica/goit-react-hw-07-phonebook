import s from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useGetContactsApiQuery } from 'redux/contactsApi';
import PropTypes from 'prop-types';

const ContactList = () => {
  const { data, isLoading } = useGetContactsApiQuery();
  const filter = useSelector(state => state.filter.value);

  const filteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return (
      data &&
      data.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
      )
    );
  };

  const filterEl = filteredContacts();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {
        <ul className={s.list}>
          {
            data &&
              // ? (
              filterEl.map(({ id, name, phone }) => (
                <ContactItem
                  key={id}
                  data={filterEl}
                  id={id}
                  name={name}
                  phone={phone}
                />
              ))
            // )
            //   : (
            //   <p className={s.text}>No contacts</p>
            // )
          }
        </ul>
      }
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
