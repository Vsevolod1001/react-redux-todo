import { AddContact } from './AddContact';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.todos);
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  const [filter, setFilter] = useState('');
  const visible = contacts.filter(us =>
    us.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <AddContact contacts={contacts} />
      <hr />
      <Filter filter={filter} setFilter={setFilter} />
      <hr />
      <ContactList contacts={visible} />
    </div>
  );
};
