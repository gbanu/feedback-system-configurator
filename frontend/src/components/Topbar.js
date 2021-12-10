import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Context } from "../context/Context";
import { DIR, LABELS } from "../utils/constants";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div style={styles.div}>
      <div style={styles.side}>
        <img src={logo} alt="logo" height="100%"></img>
        {user ? (
          <Link style={styles.linkTopbar} to={DIR.home}>
            {LABELS.myForms}
          </Link>
        ) : null}
        {user ? (
          <Link style={styles.linkTopbar} to={DIR.configurator}>
            {LABELS.createNew}
          </Link>
        ) : null}
      </div>
      <div style={styles.side}>
        {user ? (
          <span style={styles.linkTopbar} onClick={handleLogout}>
            Logout
          </span>
        ) : (
          <Link style={styles.linkTopbar} to={DIR.login}>
            {LABELS.login}
          </Link>
        )}
      </div>
    </div>
  );
};

const styles = {
  div: {
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.16)",
  },
  side: {
    maxHeight: "100%",
    display: "flex",
    alignItems: "center",
    margin: "0px 10px 0px 10px",
  },
  linkTopbar: {
    padding: 10,
    fontWeight: 600,
  },
};

export default Topbar;
