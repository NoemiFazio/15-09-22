import CategoryListItem from "../CategoryListItem";
import styles from "./index.module.scss";

const CategoryList = (props) => {
  const { categories = [] } = props;

  return (
    <section className={styles.CategoryList}>
      <ul>
        {categories.map((category) => (
          <CategoryListItem key={category.idCategory} category={category} />
        ))}
      </ul>
    </section>
  );
};

export default CategoryList;
