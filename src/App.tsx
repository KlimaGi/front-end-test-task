import React, { useEffect, useState } from 'react';
import { get } from './plugins/http';
import { WineItemInterface } from './types/main-types';
import './App.css';

const App = () => {
  const [data, setData] = useState<WineItemInterface[] | null>(null);

  useEffect(() => {
    const allList = async () => {
      const res = await get('./list.json');
      console.log('res', res);
      if (res.length > 0) setData(res);
      if (res.length === 0) console.log('there is no data');
    };
    allList();
  }, [])

  return (
    <div className="App">
      {
        data && data.map((item) => <p key={`${item.id}`}>{item.name}</p>)
      }
    </div>
  );
}

export default App;
