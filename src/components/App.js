import React from 'react';
import StorePre from '../containers/StorePre';
import CountButton from '../containers/CountButton';

const App = () => (
    <div className="App">
      <StorePre />
      <CountButton>
        Count Up
      </CountButton>
    </div>
);

export default App;
