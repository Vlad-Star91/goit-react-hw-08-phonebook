import ContactList from "../components/ContactList/ContactList";
import Form from "../components/ContactForm/Form";
import SearchContact from "../components/SearchContact/SearchContact";
import s from "../components/PhoneBook/PhoneBook.module.css";

export default function ContactsView() {
  return (
    <>
      <div className={s.container}>
        <h1 className={s.headingForm}>Phonebook</h1>
        <Form />
        <h2 className={s.contactList}>Contacts</h2>
        <SearchContact />
        <ContactList />
      </div>
    </>
  );
}
