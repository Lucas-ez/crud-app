import { useEffect, useState } from 'react';
import './App.css';
import Row from './components/Row.jsx'
import Form from './components/Form.jsx'

function App() {

  const [table, setTable] = useState([])

  const add = (newRow) => {
    setTable([...table, newRow])
  }

  const remove = (id) => {
    setTable([...table.filter(e => e.id !== id)])
  }

  useEffect(() => {
    if(!localStorage.getItem('table')) {
      localStorage.setItem('table', [])
    } else {
      setTable(JSON.parse(localStorage.getItem('table')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('table', JSON.stringify(table))
  }, [table])

  return (
    <div className="App">
      <Form id={table.length} callback={add}/>
      <table className='table'>
        <tbody> 
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Birthdate </td>
            <td>Email</td>
            <td>Delete</td>
          </tr>
          {table.map(e=> <Row key={e.id} info={e} remove={remove}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
