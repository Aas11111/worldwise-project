// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div className="pricing-div">
          <h2>
            <span>Simple pricing.</span>
            {/* <br /> */}
            <span>Just $9/month.</span>
          </h2>
          <p>
            {/* Grindelwald, in Switzerland, skiing in winter and hiking in summer.
            It's also a base for mountain-climbing ascents up the north face of
            Eiger Mountain. */}
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a grindelwald" />
      </section>
    </main>
  );
}
