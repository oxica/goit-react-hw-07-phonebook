import s from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
// import { useSelector } from 'react-redux';
import { useGetContactsApiQuery } from 'redux/contactsApi';

const ContactList = () => {
  // const items = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.filter);

  const { data, isLoading } = useGetContactsApiQuery();
  // const contacts = getVisibleContacts(items, filter);
  // console.log(data);

  if (isLoading) return <p>Loading...</p>;

  // const getVisibleContacts = filter =>
  //   data.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );

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
