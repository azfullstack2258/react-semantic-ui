import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import Table from './components/Table';

const tableData = [{
    "username": "richard",
    "email": "richard@sample.com",
    "age": 20
  },
  {
    "username": "michael",
    "email": "michael@sample.com",
    "age": 23
  },
  {
    "username": "diego",
    "email": "diego@sample.com",
    "age": 24
  },
  {
    "username": "rene",
    "email": "rene@sample.com",
    "age": 22
  },
  {
    "username": "agustin",
    "email": "agustin@sample.com",
    "age": 32
}];

function App() {
  return (
    <div className="App">
      <Table data={tableData} />    
    </div>
  );
}

export default App;
