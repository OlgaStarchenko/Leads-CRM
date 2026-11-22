import { useState } from "react";
import styles from "../pages/app.module.css";

export function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    status: "new",
    price: "",
    comment: "",
  });

  function handleChange(event) {
    const { name, value } = event;
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <div className={styles.open__modal}>
      <div className={styles.input__container}>
        <input
          className={styles.input__form}
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className={styles.input__form}
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          className={styles.input__form}
          type="text"
          name="service"
          value={form.service}
          onChange={handleChange}
        />
        <select name="status" value={form.status} onChange={handleChange}>
          <option value={"new"}>Новая</option>
          <option value={"in_progress"}>В работе</option>
          <option value={"done"}>Завершена</option>
          <option value={"canceled"}>Отменена</option>
        </select>
        <input
          className={styles.input__form}
          type="text"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
        <input
          className={styles.input__form}
          type="text"
          name="comment"
          value={form.comment}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
