// import styles from "../leadRow/leadRow.module.css";
import { LeadRow } from "./../leadRow/LeadRow";

export function LeadsTable({ leads }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Услуга</th>
            <th>Статус</th>
            <th>Цена</th>
            <th>Дата</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <LeadRow key={lead.id} lead={lead} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
