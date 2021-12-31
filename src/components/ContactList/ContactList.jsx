import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";
import s from "./ContactList.module.css";
import * as phonebookOperations from "../../redux/phonebook/phonebook-operations";

function ContactList() {
  const contactList = useSelector(getFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(phonebookOperations.fetchContact());
  }, [dispatch]);
  return (
    <ul className={"js-list"}>
      {contactList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button
              className={s.btnList}
              type="button"
              onClick={() => dispatch(phonebookOperations.deletedContact(id))}
            >
              Deleted
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
export default ContactList;
