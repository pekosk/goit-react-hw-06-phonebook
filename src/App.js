import './App.module.css';
import { useState, useEffect, useCallback } from 'react';
import { nanoid } from "nanoid";
import Section from './components/Section';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem("contacts")) ?? [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);


  const haveContact = (data) => {
    const name = contacts.some((contact) => contact.name === data.name);
    return name;
  };

  const onFilter = ({ target }) => {
    setFilter(target.value);
  };

  const onContactsFilter = () => {
    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
    return filteredContacts;
  };

  const onDelete = (e) => {
    const newContacts = contacts.filter((contact) => contact.id !== e);
    setContacts(newContacts);
  };

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onFilter={onFilter} />
        <Contacts
          contacts={onContactsFilter()}
          onDelete={onDelete} />
      </Section>
    </>
  );
}

export default App;
