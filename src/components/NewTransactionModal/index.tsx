import Modal from 'react-modal';
import { Container, TrasactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      isOpen={isOpen}
      onRequestClose={onRequestClose}>

     <button
      type='button'
      onClick={onRequestClose}
      className='react-modal-close'
      >
      <img src={closeImg} alt="Fechar modal"/>
     </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder='Título'
        />

        <input
          type='number'
          placeholder='Valor'
        />

        <TrasactionTypeContainer>
          <button type="button">
            <img src={incomeImg}alt="Entrada"/>
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeImg}alt="Saída"/>
            <span>Saída</span>
          </button>
        </TrasactionTypeContainer>

        <input
          placeholder='Categoria'
        />
        <button type="submit">
          Cadastrar
         </button>
      </Container>



    </Modal>
  )
}