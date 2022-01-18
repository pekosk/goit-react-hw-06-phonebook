import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContact = createAction('contacts/add', (contacts) => {
    return {
        payload: {
            ...contacts,
            id: nanoid()
        }
    }
})

export const removeContact = createAction('contacts/remove')