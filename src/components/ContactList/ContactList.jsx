import { nanoid } from 'nanoid';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteBtn }) => {
  return (
    <ul className={s.ContactList}>
      {contacts.map(({ number, name }) => (
        <li key={nanoid()} className={s.item}>
          <span className={s.star}>&#10031;</span>
          {name}:<span className={s.number}>{number}</span>
          <button
            className={s.btn}
            onClick={() => onDeleteBtn(name)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
