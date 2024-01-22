import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dogs overlooking mountain with sunset"
        />

        <div>
          <h2>About WorldWide.</h2>
          <p></p>
          <p></p>
        </div>
      </section>
    </main>
  );
}
