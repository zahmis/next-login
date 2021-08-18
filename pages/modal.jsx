import Modal from 'react-modal'
import { useState } from 'react'

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.3)"
  },

  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    width                 : '500px',
    height                : '300px',
    transform             : 'translate(-50%, -50%)'
  }
};

// アプリのルートを識別するクエリセレクタを指定する。
Modal.setAppElement('#__next')

const ModalShown = () => {
  const [modalIsOpen,setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const afterOpenModal = () => {
  }

  const closeModal = () => {
    setIsOpen(false)
  }

    return (
      <>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h2>Hello</h2>
          <button onClick={closeModal}>close</button>
        </Modal>
      </>
    )
}

export default ModalShown
