import { Header } from './components/Header';
import { GlobalStyle } from './styles/globals';
import {Dashboard} from './components/Dashboard'
import Modal from 'react-modal'
import { useState } from 'react';
import { NewTransactionModal} from './components/NewTransactionModal';

Modal.setAppElement(' #root ')

export function App() {

  // construção do estado para criação do modal;
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}

