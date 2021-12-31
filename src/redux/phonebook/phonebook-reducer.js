import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as phonebookActions from "./phonebook-actions";
import {
  fetchContact,
  addContact,
  deletedContact,
} from "./phonebook-operations";

const { getFilter } = phonebookActions;

const items = createReducer([], {
  [fetchContact.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deletedContact.fulfilled]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const loading = createReducer(false, {
  [fetchContact.pending]: () => true,
  [fetchContact.fulfilled]: () => false,
  [fetchContact.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deletedContact.pending]: () => true,
  [deletedContact.fulfilled]: () => false,
  [deletedContact.rejected]: () => false,
});
const filter = createReducer("", {
  [getFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContact.rejected]: (_, { payload }) => payload,
  [fetchContact.fulfilled]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.fulfilled]: () => null,
  [deletedContact.rejected]: (_, { payload }) => payload,
  [deletedContact.fulfilled]: () => null,
});
export default combineReducers({
  items,
  filter,
  loading,
  error,
});
