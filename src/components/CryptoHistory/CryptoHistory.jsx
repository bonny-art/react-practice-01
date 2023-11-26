import { dateFormat } from 'helpers/formatDistance';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';


export const CryptoHistory = ({transactions}) => {
  return (
    <BaseTable>
  <THead>
    <tr>
      <Th>№</Th>
      <Th>PRICE</Th>
      <Th>AMOUNT</Th>
      <Th>DATE</Th>
    </tr>
  </THead>

  <tbody>
        {transactions.map(({ id, price, amount, date }, idx) => {
          return (<Tr key={id}>
            <Td>{idx+1}</Td>
            <Td>{price}</Td>
            <Td>{ amount }</Td>
            <Td>{dateFormat(date)}</Td>
          </Tr>)
        })}
  </tbody>
</BaseTable>
  )
};
