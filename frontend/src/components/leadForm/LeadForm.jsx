import { useState } from "react";
import styles from "../leadForm/leadForm.module.css";

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
        <h2 className={styles.form__title}>Добавление новой заявки</h2>
        <input
          className={styles.input__form}
          type="text"
          name="name"
          placeholder="Имя"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className={styles.input__form}
          type="text"
          name="phone"
          placeholder="Номер телефона"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          className={styles.input__form}
          type="text"
          name="service"
          placeholder="Услуга"
          value={form.service}
          onChange={handleChange}
        />
        <select name="status" value={form.status} onChange={handleChange}>
          <option value={"new"}>Новая</option>
          <option value={"in_progress"}>В работе</option>
          <option value={"done"}>Завершена</option>
          {/* <option value={"canceled"}>Отменена</option> */}
        </select>
        <input
          className={styles.input__form}
          type="text"
          name="price"
          placeholder="Цена"
          value={form.price}
          onChange={handleChange}
        />
        <input
          className={styles.input__form}
          type="text"
          name="comment"
          placeholder="Комментарий..."
          value={form.comment}
          onChange={handleChange}
        />
        <button className={styles.btn__save}>Сохранить</button>
        <button className={styles.btn__cancel}>Отменить</button>
      </div>
    </div>
  );
}
