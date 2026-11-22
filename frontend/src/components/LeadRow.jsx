import styles from "../pages/app.module.css";

export function LeadRow({ lead }) {
  return (
    <tr>
      <td>{lead.name}</td>
      <td>{lead.service}</td>
      <td>{lead.status}</td>
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
