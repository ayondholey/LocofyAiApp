import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  notifications?: string;
  avatar?: string;
  loginSection?: boolean;
};

const Header: FunctionComponent<HeaderType> = ({
  notifications,
  avatar,
  loginSection,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className={styles.navLinks}>
          <div className={styles.home}>Home</div>
          <div className={styles.stays}>Stays</div>
          <div className={styles.becomeAHost}>Become a host</div>
        </div>
        {!loginSection && (
          <div className={styles.loginSection}>
            <img
              className={styles.notificationsIcon}
              alt=""
              src={notifications}
            />
            <img className={styles.avatarIcon} alt="" src={avatar} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
