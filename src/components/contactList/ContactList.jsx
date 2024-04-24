import { selectContacts } from "../../redux/selectors";
import Contact from "../contact/Contact";
import css from "./ContactList.module.scss";
import { useSelector } from 'react-redux'
import { selectNameFilter } from "../../redux/selectors";


const ContactList = () => {

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter).toLowerCase() || '';

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css["contact-list"]}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;