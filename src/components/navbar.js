import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check authentication status when component mounts
  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    setIsAuthenticated(!!token); // Convert to boolean (true if token exists)
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("auth-token"); // Remove token
    setIsAuthenticated(false); // Update state
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav style={styles.navContainer}>
      {/* Logo Section */}
      <div style={styles.logoContainer}>
        <h1 style={styles.logo}>
          <span style={styles.ener}>Ener</span>
          <span style={styles.trans}>Tra</span>
          <span style={styles.sition}>nsition.com</span>
        </h1>
        <span style={styles.tagline}>A Unit of Pro H2Vis Solutions</span>
      </div>

      {/* Navigation Links */}
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/latestpreprints" style={styles.navLink}>
            Latest Preprints
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>
            About
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/team" style={styles.navLink}>
            Team
          </Link>
        </li>
        <li style={styles.navItem}>
          {isAuthenticated ? (
            <button onClick={handleLogout} style={styles.logoutButton}>
              Logout
            </button>
          ) : (
            <Link to="/login" style={styles.navLink}>
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

const styles = {
 
   navContainer: {
    backgroundColor: "#0073e6", // Set the blue background color
    padding: "15px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "white", // Set text color to white
  },
  logoContainer: {
    textAlign: "left",
  },
  logo: {
    fontSize: "32px",
    fontWeight: "bold",
    margin: 0,
  },
  ener: { color: "#FFD700" },
  trans: { color: "#FFA500" },
  sition: { color: "#000000" },
  tagline: {
    fontSize: "16px",
    color: "#aaa",
    marginTop: "5px",
    fontWeight: "bold",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    padding: 0,
    marginTop: "10px",
  },
  navItem: {
    marginRight: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "#000",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
  logoutButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "8px 12px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default Navbar;
