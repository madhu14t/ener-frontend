import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
      
        <Navbar />
      </div>
    </header>
  );
};

const MainContent = () => {
  return (
    <main style={styles.container}>
      <div style={styles.heading}>
        <h1>FIRST OF ITS KIND</h1>
        <h1>TRANSPARENT RESEARCH SERVER</h1>
        
      </div>
      <div style={styles.sub}>
        <a href="/submitpreprint" style={styles.navLinkButton}>Submit Preprint</a>
      </div>
    </main>
  );
};

const Home = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

// Inline Styles
const styles = {
  header: {
    // backgroundColor: "#0073e6",
    padding: "15px",
    color: "white",
    textAlign: "left"
  },
  container: {
    maxWidth: "1200px",
    margin: "auto",
    textAlign: "left"
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold"
  },
  ener: { color: "#fff" },
  trans: { color: "#f4b400" },
  sition: { color: "#fff" },
  tagline: { fontSize: "14px", display: "block" },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "10px",
    textAlign:"left"

  },
  navLink: {
    textDecoration: "none",
    color: "white",
    padding: "8px 12px",
    fontWeight: "bold",
    borderRadius: "5px",
    transition: "background 0.3s ease",
    textAlign:"left"
  },
  login: {
    marginLeft: "20px"
  },
  heading: {
    marginTop: "50px",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign:"left"
  },
  sub: {
    marginTop: "20px",
    marginBottom:"20px",
    textAlign:"left"
  },
  navLinkButton: {
    textDecoration: "none",
    backgroundColor: "#0073e6",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "18px",
    fontWeight: "bold",
    display: "inline-block",
    transition: "background 0.3s ease"
  }
};

export default Home;
