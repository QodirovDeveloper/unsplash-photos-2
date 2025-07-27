// styles
import styles from "./Auth.module.css";

function Login() {
  const loading = !true;
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <h1 className={styles.title}>Login</h1>
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
        {!loading && <button>Login</button>}
      </form>
    </div>
  );
}

export default Login;
