import * as React from 'react';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import './scss/app.scss'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Content />
    </div >
  );
}

export default App;
