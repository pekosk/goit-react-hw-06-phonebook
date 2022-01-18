import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContact = createAction('contact/add', (contact) => {
    return {
        payload: {
            ...contact,
            id: nanoid()
        }
    }
})

export const removeContact = createAction('contact/remove')