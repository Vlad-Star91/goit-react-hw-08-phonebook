import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction("contacts/fetchContactRequest");
export const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
export const fetchContactError = createAction("contacts/fectchContactError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const deletedContactRequest = createAction(
  "contacts/deletedContactRequest"
);
export const deletedContactSuccess = createAction(
  "contacts/deletedContactSuccess"
);
export const deletedContactError = createAction("contacts/deletedContactError");

export const getFilter = createAction("phonebook/getFilter");
