import { useState } from "react";
import shortid from "shortid";
import s from "./Form.module.css";
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from "react-redux";
import * as phonebookOperations from "../../redux/phonebook/phonebook-operations";

function Form() {
  const contacts = useSelector((state) => state.phonebook.items);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const InputValues = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const addContact = (e) => {
    e.preventDefault();
    const lengthInputName = name.length;
    const lengthInputNumber = number.length;
    e.preventDefault();
    if (lengthInputName < 2 || lengthInputName > 21) {
      alert("Enter a name greater than 1 character and no more than 10");
      return;
    }
    if (lengthInputNumber < 7 || lengthInputNumber > 10) {
      alert("Enter a number greater than 7 character and no more than 10");
      return;
    }
    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(phonebookOperations.addContact({ name, number }));
    resetInputValues();
  };

  const resetInputValues = () => {
    setName("");
    setNumber("");
  };

  const idName = shortid.generate();
  const idNumber = shortid.generate();

  return (
    <form className={s.form} onSubmit={addContact}>
      <label htmlFor={idName} className={s.labelName}>
        Name
      </label>
      <input
        id={idName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={name}
        onChange={InputValues}
        autoComplete="off"
      />
      <label htmlFor={idNumber} className={s.labelNumber}>
        Number
      </label>
      <input
        id={idNumber}
        type="tel"
        pattern="^[ 0-9]+$"
        name="number"
        value={number}
        onChange={InputValues}
        autoComplete="off"
      />
      <button className={s.btnForm} type="submite">
        Add contact
      </button>
    </form>
  );
}
export default Form;
