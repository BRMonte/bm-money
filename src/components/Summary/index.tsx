import { Container } from "./styles";
import { useContext } from 'react';
import outcome from "../../assets/outcome.svg";
import income from "../../assets/income.svg";
import total from "../../assets//total.svg";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);


  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas"/>
        </header>
        <strong>R$700,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcome} alt="Saidas"/>
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Total"/>
        </header>
        <strong>R$200,00</strong>
      </div>
    </Container>
  )
}
