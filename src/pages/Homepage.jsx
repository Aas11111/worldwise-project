import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNave from "../components/PageNav";
export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNave />
      <section>
        {options.map((option, index) => (
          <div key={index}>
            <h1>{option.heading}</h1>
            <h1> {option.subheading}</h1>
            <h2>{option.description}</h2>
            <Link to={option.linkTo} className="cta">
              {option.linkText}
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}

const options = [
  {
    heading: "You travel the world.",
    subheading: "WorldWise keeps track of your adventures.",
    description:
      "A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show how you have wandered the world.",
    linkText: "start tracking now",
    linkTo: "/app",
  },
];
