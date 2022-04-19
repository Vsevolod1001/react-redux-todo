import s from './AddContact.module.css';
import { useState } from 'react';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/todosSlice';
// import { getContacts } from 'redux/selectors';

export const AddContact = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const saveContact = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    dispatch(addTodo(newContact));
  };

  const hendleSubmit = e => {
    e.preventDefault();
    saveContact(name, number);
    setName('');
    setNumber('');
  };
  return (
    <form className={s.Formdiv} onSubmit={hendleSubmit}>
      <label className={s.ContactLable}>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={e => setName(e.currentTarget.value)}
        />
      </label>
      <label className={s.ContactLable}>
        Number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => setNumber(e.currentTarget.value)}
        />
      </label>

      <button type="submit">add</button>
    </form>
  );
};
