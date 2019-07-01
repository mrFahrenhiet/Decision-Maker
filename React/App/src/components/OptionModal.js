import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    className="modal"
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
  >
    <h3 className="modal__title">Selected Option:</h3>
    {props.selectedOption && <p className="modal__text">{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption} className="button button--modal">Okay</button>
  </Modal>
);

export default OptionModal;
