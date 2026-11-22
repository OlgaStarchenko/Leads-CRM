import styles from "../pages/app.module.css";
import { getStatusLabel } from "../utils/getStatusLabel";

export function LeadRow({ lead }) {
  return (
    <tr>
      <td>{lead.name}</td>
      <td>{lead.service}</td>
      <td>
        <span className={styles[lead.status]}>
          {getStatusLabel(lead.status)}
        </span>
      </td>
      <td>{lead.price}</td>
      <td>{lead.created_at}</td>
      <td>
        <div>
          <button className={styles.btn__edit}>Редактировать</button>
          <button className={styles.btn__delete}>Удалить</button>
        </div>
      </td>
    </tr>
  );
}
