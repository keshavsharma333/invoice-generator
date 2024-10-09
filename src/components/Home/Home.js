import React from "react";
import styles from "./Home.module.css";
import laptopMockUp from "../../assets/images/mockup.png";

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.hero}>
        <h1>Easiest invoicing for freelancers and small businesses</h1>
        <div className={styles.paragraph}>
          <p>
            Invoicing application made with MongoDB, Express, React & Nodejs
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src={laptopMockUp} alt="invoicing-app" className={styles.img} />
        </div>
      </section>
    </div>
  );
};

export default Home;
