import css from "./ContactList.module.css"
import Contact from "../ContactList/Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.ul}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}