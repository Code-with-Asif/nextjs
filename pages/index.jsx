import styles from "../styles/Home.module.css";
const Random = () => {
  let heading = "Beautiful Websites Templates";
  let para = "lets make some beautiful tamplates";
  let btn1 = "Download";
  let btn2 = "Get Started";
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{heading}</h1>
        <p>{para}</p>
        <div className={styles.btns}>
          {" "}
          <button>{btn1}</button>
          <button>{btn2}</button>
        </div>
      </div>
    </div>
  );
};

export default Random;
