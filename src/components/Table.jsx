import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { Table, Input } from 'semantic-ui-react';
import { print1To100, isIsogram, removeVowels } from '../helpers';

const CustomTable = ({ data: initialData }) => {
  const [column, setColumn] = useState(null);
  const [data, setData] = useState(initialData);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    // Just for testing javascript functions
    console.log(print1To100());
    console.log(isIsogram('Word'));
    console.log(isIsogram('tavares'));
    console.log(isIsogram('hansen'));
    console.log(isIsogram('thomas'));
    console.log(removeVowels('I have never seen a thin person drinking Diet Coke.'));
    console.log(removeVowels('We’re gonna build a wall!'));
    console.log(removeVowels('Happy Thanksgiving to all--even the haters and losers!'));
  }, [initialData.length]);

  const handleSort = clickedColumn => () => {
    if (column !== clickedColumn) {
      setColumn(clickedColumn);
      setData(_.sortBy(data, [clickedColumn]));
      setDirection('ascending');
      return;
    }

    setData(data.reverse());
    setDirection(direction === 'ascending' ? 'descending' : 'ascending');
  };

  const handleKeyChange = e => {
    const keyword = e.target.value.toLowerCase();
    const filteredUsers = initialData.filter(
      ({ username, email, age }) => 
        username.toLowerCase().includes(keyword)
        || email.toLowerCase().includes(keyword)
        || age.toString().toLowerCase().includes(keyword)
    );
    setData(filteredUsers);
  };

  return (
    <>
      <Input
        icon="users"
        iconPosition="left"
        placeholder="Search users..."
        onChange={handleKeyChange}
      />
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'username' ? direction : null}
              onClick={handleSort('username')}
            >User Name</Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'email' ? direction : null}
              onClick={handleSort('email')}
            >Email</Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'age' ? direction : null}
              onClick={handleSort('age')}
            >Age</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ username, email, age }) => (
            <Table.Row key={username}>
              <Table.Cell>{username}</Table.Cell>
              <Table.Cell>{email}</Table.Cell>
              <Table.Cell>{age}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default CustomTable;
