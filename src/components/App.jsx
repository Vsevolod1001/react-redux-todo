import { AddContact } from './AddContact/AddContact';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  const [filter, setFilter] = useState('');
  const visible = contacts.filter(us =>
    us.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <AddContact />
      <hr />
      <Filter filter={filter} setFilter={setFilter} />
      <hr />
      <ContactList contacts={visible} />
    </div>
  );
};
