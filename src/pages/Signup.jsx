// styles
import styles from "./Auth.module.css";

function Signup() {
  const loading = !true;
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <h1 className={styles.title}>Signup</h1>
        <label>
          <span>Display Name:</span>
          <input type="text" placeholder="display name" />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" placeholder="email" />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" placeholder="password" />
        </label>
        {loading && (
          <button className={styles.disabled} disabled>
            Loading...
          </button>
        )}
        {!loading && <button>Signup</button>}
      </form>
    </div>
  );
}

export default Signup;
