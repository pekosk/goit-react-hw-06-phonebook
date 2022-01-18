import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContacts = createAction('contacts/add', (contacts) => {
    return {
        payload: {
            ...contacts,
            id: nanoid()
        }
    }
})

export const removeContacts = createAction('contacts/remove')