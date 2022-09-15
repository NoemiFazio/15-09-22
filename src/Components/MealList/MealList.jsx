import { Link } from "react-router-dom";
import MealListItem from "../MealListItem";
import styles from "./index.module.scss";

const MealList = (props) => {
  const { meals = [], categoryName = "" } = props;

  return (
    <section className={styles.MealList}>
      <ul>
        {meals.map((meal) => (
          <MealListItem
            key={meal.idMeal}
            meal={meal}
            categoryName={categoryName}
          />
        ))}
      </ul>
      <button
        className={styles.button}
        aria-label="Bottone per tornare alla Homepage"
      >
        <Link
          className={styles.link}
          to="/"
          title="Torna alla Homepage"
          aria-label="Torna alla Homepage"
        >
          Home
        </Link>
      </button>
    </section>
  );
};

export default MealList;
