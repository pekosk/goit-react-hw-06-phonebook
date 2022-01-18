import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact } from "./contactsActions";

const contactsReducer = createReducer([], {
    [addContact]: (state, { payload }) => {
        const newContact = [...state, payload];
        return newContact;

    },
    [removeContact]: (state, { payload }) => {
        const newContact = state.filter(({ id }) => id !== payload)
        return newContact;
    },
});

export default contactsReducer;