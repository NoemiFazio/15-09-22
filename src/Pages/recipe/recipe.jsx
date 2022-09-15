import { useParams, Outlet, Link, NavLink } from "react-router-dom";
import { ENDPOINTS } from "../../utils/api/endpoints";
import { useFetch } from "../../utils/api/use-fetch";
import styles from "./index.module.scss";

const Recipe = (props) => {
  const { categoryName, recipeName, id } = useParams();
  const { data, loading, error } = useFetch(`${ENDPOINTS.DETAIL}?i=${id}`);
  const recipe = data?.meals?.at(0) ?? null;

  const tabs = [
    { label: "Ricetta", path: "./istruzioni" },
    { label: "Ingredienti", path: "./ingredienti" },
    { label: "YouTube", path: "./youtube" },
  ];

  if (!data || loading) {
    return "loading...";
  }

  console.log(data);

  return (
    <>
      <div className={styles.ciao}>
        <header>
          <div className={styles.row}>
            <div className={styles.colAuto}>
              <figure>
                <img
                  className={styles.img}
                  width={100}
                  src={recipe.strMealThumb}
                  alt={recipeName}
                />
              </figure>
            </div>
            <div className={styles.col}>
              <h2 className={styles.title}>
                <Link to={`/catalogo/${categoryName}`}>{categoryName}</Link>
              </h2>
              <h1 className={styles.fs}>{recipeName}</h1>
            </div>
          </div>
        </header>

        <ul className={styles.ul}>
          {tabs.map(({ label, path }) => (
            <li className={styles.li} key={path}>
              <NavLink
                className={({ isActive }) =>
                  `styles ${isActive ? "active" : "not-active"}`
                }
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "currentColor",
                    pointerEvents: isActive ? "none" : "auto",
                    opacity: isActive ? 0.4 : 1,
                  };
                }}
                to={path}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Outlet context={recipe} />

        {/* {} */}
      </div>
    </>
  );
};

export default Recipe;
