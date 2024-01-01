import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";
function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; copyright {new Date().getFullYear()} by WorldWise inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
