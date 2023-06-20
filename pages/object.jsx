import { useState } from "react";
import styles from "../styles/Home.module.css";

const Object = () => {
  const [info, setInfo] = useState([]);
  const [user, setUser] = useState({
    name: "Ali",
    age: 25,
    message: "welcome  user",
  });
  const textChange = () => {
    setUser({ ...user, message: "welcome Asif" });
  };
  return (
    <div className={styles.userData}>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h3>{user.message}</h3>
      <button onClick={textChange}>Change </button>
    </div>
  );
};

export default Object;
