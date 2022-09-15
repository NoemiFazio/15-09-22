import { Link } from "react-router-dom";
import styles from "./index.module.scss";

function ErrorPage(props) {
  return (
    <div className={styles.ErrorPage}>
      {props.status === 404 ? (
        <img
          aria-label="Immagine di segnalazione errore 404"
          src="https://miro.medium.com/max/1400/1*zE2qnVTJehut7B8P2aMn3A.gif"
          alt="Error404"
        />
      ) : (
        <p aria-label="Error!">"Error!"</p>
      )}

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
    </div>
  );
}

export default ErrorPage;
