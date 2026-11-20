import styles from "./app.module.css";

export function Header() {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__container__left}>
        <h1 className={styles.header__title__h1}>CRM</h1>
        <h2 className={styles.header__title__h2}>Заявки клиентов</h2>
      </div>

      <div className={styles.header__container__right}>
        <h2 className={styles.header__manager}>Менеджер</h2>
      </div>
    </div>
  );
}
export function Stats() {
  return (
    <div className={styles.cards__container}>
      <div className={styles.card__title}>
        <h2 className={styles.card__all}>
          Всего заявок <span className={styles.card__amount}>12</span>
        </h2>
      </div>

      <div>
        <h2 className={styles.card__new}>
          Новые <span className={styles.card__amount}>4</span>
        </h2>
      </div>

      <div>
        <h2 className={styles.card__in__progress}>
          В работе <span className={styles.card__amount}>5</span>
        </h2>
      </div>

      <div>
        <h2 className={styles.card__cancelled}>
          Завершены <span className={styles.card__amount}>3</span>
        </h2>
      </div>
    </div>
  );
}
export function Filters() {
  return (
    <div className={styles.filters__container}>
      <input className={styles.filter__input} placeholder="Поиск клиента..." />
      <select className={styles.filter__select}>
        <option id="all">Все статусы</option>
        <option id="new">Новые</option>
        <option id="inProgress">В процессе</option>
        <option id="done">Выполнено</option>
        <option id="cancelled">Отменено</option>
      </select>
      <button type="button" className={styles.btn__add}>
        + Новая заявка
      </button>
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
                <button className={styles.btn__edit}>Редактировать</button>
                <button className={styles.btn__delete}>Удалить</button>
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
                <button className={styles.btn__edit}>Редактировать</button>
                <button className={styles.btn__delete}>Удалить</button>
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
                <button className={styles.btn__edit}>Редактировать</button>
                <button className={styles.btn__delete}>Удалить</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Егор</td>
            <td>Разработка сайта</td>
            <td>В работе</td>
            <td>85 000 </td>
            <td>12.11.2026</td>
            <td>
              <div>
                <button className={styles.btn__edit}>Редактировать</button>
                <button className={styles.btn__delete}>Удалить</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Екатерина</td>
            <td>Лендинг</td>
            <td>Новая</td>
            <td>45 000 </td>
            <td>14.11.2026</td>
            <td>
              <div>
                <button className={styles.btn__edit}>Редактировать</button>
                <button className={styles.btn__delete}>Удалить</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>Антон</td>
            <td>Дизайн</td>
            <td>ЗВ работе</td>
            <td>35 000 </td>
            <td>11.11.2026</td>
            <td>
              <div>
                <button className={styles.btn__edit}>Редактировать</button>
                <button className={styles.btn__delete}>Удалить</button>
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
    <div className={styles.main__container}>
      <Header />
      <Stats />
      <Filters />
      <LeadsTable />
    </div>
  );
}
