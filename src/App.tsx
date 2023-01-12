import React from 'react';
import AllItems from './components/all-items';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <div className="main">
      <AllItems />
    </div>
  );
}

export default App;
