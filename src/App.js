import './App.module.css';
import { useState, useEffect, useCallback } from 'react';
import { nanoid } from "nanoid";
import Section from './components/Section';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';

function App() {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
}

export default App;
