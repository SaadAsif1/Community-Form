import React from 'react';
import Modal from 'react-modal';
import Head from './assets/Hijab.png';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
  },
};

Modal.setAppElement('#root');

const IntroModal = () => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className='modal-top-btn'>
        <button className='modal-top-main-btn' onClick={openModal}>
          View Our Goal
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <button className='modal-btn' onClick={closeModal}>
          Close
        </button>
        <div className='modal-body'>
          <img className='modal-pic' src={Head} alt='Head' />
          <h1 className='ideas-title'>Your Ideas Matter</h1>
          The World is going through many things and i am here to help. The World is going
          through many things and i am here to help. The World is going through many
          things and i am here to help. The World is going through many things and i am
          here to help. The World is going through many things and i am here to help.
        </div>
      </Modal>
    </div>
  );
};

export default IntroModal;
