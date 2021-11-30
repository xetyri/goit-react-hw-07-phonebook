import s from './ContactList.module.css'
import { useDeleteContactMutation} from "../../Api/Api";

export default function ContactList({contacts}) {
  const [deleteContact] = useDeleteContactMutation();

  return (
  <ul className={s.list}>
      {contacts.map((contact) => (
        <li className={s.elem} key={contact.id}>
          <div className={s.title}>{`${contact.name}: ${contact.phone}`}</div>
          <button
            className={s.button}
            type="button"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}