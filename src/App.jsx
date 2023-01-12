import { useState } from 'react';
import './App.css';
import { readDB, writeDB } from './db/db.js'
import Row from './components/Row.jsx'
import Form from './components/Form.jsx'

const DBTest = [
  {id: 1,
  firstName: 'Nombre',
  lastName: 'Apellido',
  email: 'email@gmail.com',
  birthDate : {
    day:'1',
    month: '1',
    year: '1991'
  }
  },
]

function App() {

  const [table, setTable] = useState(DBTest)

  return (
    <div className="App">
      <Form id={table.length}/>
      <table>
        <tbody> 
          {table.map(e=> <Row key={e.id} props={e}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
