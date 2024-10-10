import Table from 'react-bootstrap/Table';
import { useFilter } from '../context';

export const StripedTable = ({card}) => {
  const { featureList } = useFilter();
  return (
    <Table striped>
     <thead>
     <tr>
     </tr>
     </thead>
     <tbody>
     { featureList.map((property) => (
        <tr>
        <td>{property + ":"}</td>
        <td className="text-break">{card[property]}</td>
       </tr>
     ))}
     </tbody>
     </Table>
  )
}
