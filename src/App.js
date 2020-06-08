import React from 'react';
import Form from './Form';
import Modal from './IntroModal';

const App = () => {
  return (
    <div>
      <Modal />

      <div className='top'></div>
      <div className='bottom'>
        <Form />
        <div className='images-container'></div>
      </div>

      <div className='bottom-color'></div>
    </div>
  );
};

export default App;
