import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContact = createAction('contacts/add', (contact) => {
    return {
        payload: {
            ...contact,
            id: nanoid()
        }
    }
})

export const removeContact = createAction('contacts/remove')