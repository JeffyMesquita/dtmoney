import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Gás de cozinha</td>
            <td className="deposit"> R$ 18.90</td>
            <td> Alimentação</td>
            <td> 04/07/2020</td>
          </tr>

          <tr>
            <td>Gás de cozinha</td>
            <td className="withdraw"> R$ 18.90</td>
            <td> Alimentação</td>
            <td> 04/07/2020</td>
          </tr>

          <tr>
            <td>Gás de cozinha</td>
            <td> R$ 18.90</td>
            <td> Alimentação</td>
            <td> 04/07/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
