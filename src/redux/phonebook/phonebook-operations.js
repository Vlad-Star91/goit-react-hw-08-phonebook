import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {
//   fetchContactError,
//   fetchContactRequest,
//   fetchContactSuccess,
// } from "./phonebook-actions";

axios.defaults.baseURL = "https://61c6401cc003e70017b79a2d.mockapi.io/";

export const fetchContact = createAsyncThunk(
  "contacts/fetchContact",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number: phone }, { rejectWithValue }) => {
    try {
      const contact = { name, phone };
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deletedContact = createAsyncThunk(
  "contacts/deletedContact",
  async (contactId, { rejectWithValue }) => {
    try {
      const {
        data: { id },
      } = await axios.delete(`/contacts/${contactId}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
