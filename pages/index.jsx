import { useState } from "react";
import styles from "../styles/Home.module.css";
const Random = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{value}</h1>
        <div className={styles.btns}>
          <button>Increment</button>
          <button>Increment</button>
          <button>Increment</button>
        </div>
      </div>
    </div>
  );
};

export default Random;
