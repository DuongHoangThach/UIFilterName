import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Table from './Table';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  return (
    <div className='App'>
      <input
        type='text'
        placeholder='Search...'
        className='search'
        onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
      />
      {<Table data={data} />}
    </div>
  );
}

export default App;
