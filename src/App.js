import './App.module.css';
import { useState, useEffect, useCallback } from 'react';
import { nanoid } from "nanoid";
import Section from './components/Section';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (!Array.isArray(contacts)) {
      return;
    }
    if (contacts.length) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts.length !== contacts.length) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = useCallback((data) => {
    const contact = {
      ...data,
      id: nanoid()
    };
    if (haveContact(data)) {
      return alert(`${data.name} is already in contacts.`);
    }
    setContacts([...contacts, contact]);
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
        <Form onSubmit={addContact} />
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
