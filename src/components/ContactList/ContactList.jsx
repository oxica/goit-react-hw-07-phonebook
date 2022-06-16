import s from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
// import { useSelector } from 'react-redux';
import { useGetContactsApiQuery } from 'redux/contactsApi';

// const getVisibleContacts = (items, filter) =>
//   items.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

const ContactList = () => {
  // const items = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.contacts.filter);
  // const contacts = getVisibleContacts(items, filter);
  const { data } = useGetContactsApiQuery();
  console.log(data);

  return (
    <ul className={s.list}>
      {data ? (
        data.map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} phone={phone} />
        ))
      ) : (
        <p className={s.text}>No contacts</p>
      )}
    </ul>
  );
};

export default ContactList;
