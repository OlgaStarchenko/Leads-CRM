import styles from "../stats/stats.module.css";

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
        <h2 className={styles.card__done}>
          Завершены <span className={styles.card__amount}>3</span>
        </h2>
      </div>
    </div>
  );
}
