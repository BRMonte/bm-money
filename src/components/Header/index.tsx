import logoImg from '../../assets/logo.svg';
import React from 'react';
import { Container, Content } from './styles'

interface Headerprops {
  onOpenNewTransactionalModal: () => void;
}

export function Header({ onOpenNewTransactionalModal }: Headerprops) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="bm-money" />
        <button type="button" onClick={onOpenNewTransactionalModal} >
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}
