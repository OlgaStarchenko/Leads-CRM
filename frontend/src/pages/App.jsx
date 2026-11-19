import styles from "./app.module.css";

export function Header() {
  return (
    <div>
      <div>
        <h1>CRM</h1>
        <h2>Заявки клиентов</h2>
      </div>
      <div>
        <h2>Менеджер</h2>
      </div>
    </div>
  );
}
export function Stats() {
  return (
    <div className={styles.card__container}>
      <div>
        <div>
          <h2 className={styles.card__title}>
            Всего заявок <span className={styles.card__amount}>12</span>
          </h2>
        </div>

        <div>
          <h2 className={styles.card__title}>
            Новые <span className={styles.card__amount}>4</span>
          </h2>
        </div>

        <div>
          <h2 className={styles.card__title}>
            В работе<span className={styles.card__amount}>5</span>
          </h2>
        </div>

        <div>
          <h2 className={styles.card__title}>
            Завершены<span className={styles.card__amount}>3</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
export function Filters() {
  return (
    <div>
      <input placeholder="Поиск клиента..." />
      <select>
        <option>Все статусы</option>
        <option>Новые</option>
        <option>В процессе</option>
        <option>Выполнено</option>
        <option>Отменено</option>
      </select>
      <button type="button">+ Новая заявка</button>
    </div>
  );
}
export function LeadsTable() {
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
          <tr>
            <td>Анна</td>
            <td>Разработка сайта</td>
            <td>Новая</td>
            <td>50 000 </td>
            <td>16.11.2026</td>
            <td>
              <div>
                <button>Редактировать</button>
                <button>Удалить</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Иван</td>
            <td>Дизайн</td>
            <td>В работе</td>
            <td>30 000 </td>
            <td>15.11.2026</td>
            <td>
              <div>
                <button>Редактировать</button>
                <button>Удалить</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Мария</td>
            <td>Лендинг</td>
            <td>Завершена</td>
            <td>70 000 </td>
            <td>14.11.2026</td>
            <td>
              <div>
                <button>Редактировать</button>
                <button>Удалить</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function App() {
  return (
    <>
      <Header />
      <Stats />
      <Filters />
      <LeadsTable />
    </>
  );
}
