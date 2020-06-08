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
          Our mission is to help better our community. We want to help make a diffrence
          with what we do and what we put on the internet. This is where you come in. Your
          ideas will help tackle particular community problems. Once you share what you
          see in your community, we will have a better understanding of what's going on
          and how we can help. Your personal information will never be shared with anyone
          or any third parties. Your ideas matter so let us know what we can do to help
          you be heard.
        </div>
      </Modal>
    </div>
  );
};

export default IntroModal;
