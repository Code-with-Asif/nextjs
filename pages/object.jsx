import { useState } from "react";
import styles from "../styles/Home.module.css";
import { users } from "./data";

const Object = () => {
  const [info, setInfo] = useState(users);
  // const [user, setUser] = useState({
  //   name: "Ali",
  //   age: 25,
  //   message: "welcome  user",
  // });
  // const textChange = () => {
  //   setUser({ ...user, message: "welcome Asif" });
  // };
  return (
    <div className={styles.userData}>
      {/* <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h3>{user.message}</h3>
      <button onClick={textChange}>Change </button> */}

      {info.map((myUser) => {
        return (
          <div className={styles.myUser}>
            <h1>{myUser.name}</h1>
            <h1>{myUser.age}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Object;
