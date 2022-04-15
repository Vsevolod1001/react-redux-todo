import { useState } from 'react';
import shortid from 'shortid';
// import { useDispatch } from 'react-redux';
// import { addTodo } from 'redux/todosSlice';

export const AddContact = ({ contacts, setContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const dispatch = useDispatch();
  const saveContact = () => {
    setContacts([
      ...contacts,
      {
        id: shortid.generate(),
        name: name,
        number: number,
      },
    ]);
    setName('');
    setNumber('');
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={e => setName(e.currentTarget.value)}
      />
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={e => setNumber(e.currentTarget.value)}
      />
      <button type="button" onClick={saveContact}>
        add
      </button>
    </div>
  );
};
