import React, { useState, useMemo, useCallback } from 'react';

const FilteredList = () => {
  console.log('FilteredList rendered');
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Diana' },
  ]);
  const [filter, setFilter] = useState('');

  const filteredUsers = useMemo(() => {
    console.log('Filtering users');
    return users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));
  }, [users, filter]);

  const addUser = useCallback(() => {
    console.log('Adding user');
    const newId = users.length + 1;
    const newName = `User${newId}`;
    setUsers(prev => [...prev, { id: newId, name: newName }]);
  }, [users]);

  return (
    <div>
      <h2>Filtered List</h2>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default FilteredList;