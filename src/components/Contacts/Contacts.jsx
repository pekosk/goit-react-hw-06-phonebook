import { memo } from 'react';
import { removeContact } from '../../redux/contacts/contactsActions';
import { useDispatch, useSelector } from "react-redux";

import ContactsItem from './ContactsItem';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact);
  const filter = useSelector((state) => state.filter);
  const removeContacts = (id) => dispatch(removeContact(id));
    
  const getItems = () => {
    if ( filter === '') return contacts;
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
    };
    
    const items = getItems();

  const elements = items.map(({ id, ...item}) => (
    <ContactsItem
      key={id}
      {...item}
      id={id}
      onDelete={removeContacts}
    />
  ));
  return <ul>{elements}</ul>;
};

export default memo(Contacts);
