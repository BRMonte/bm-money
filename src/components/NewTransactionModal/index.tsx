import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import close from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }:NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={close} alt="Fechar modal"/>
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Titulo"/>
        <input type="number" placeholder="Valor"/>

        <TransactionTypeContainer>
          <button type="button">
            <img src={income} alt="Entrada"/>
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcome} alt="Saida"/>
            <span>Saida</span>
          </button>
        </TransactionTypeContainer>
        <input placeholder="Categoria"/>
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
