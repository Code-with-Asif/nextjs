import { useState } from "react";
import styles from "../styles/Home.module.css";
const Random = () => {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    if (value === 0) {
      setValue(0);
      alert("You reached minimum value");
    } else {
      setValue(value - 1);
    }
  };
  const reset = () => {
    setValue(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{value}</h1>
        <div className={styles.btns}>
          <button onClick={increment}>Increment</button>
          <button onClick={reset}>Reset</button>
          <button onClick={decrement}>decrement</button>
        </div>
      </div>
    </div>
  );
};

export default Random;
