import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
const About = () => {
  return (
    <div>
      <header style={styles.header}>
        <div style={styles.container}>
         
          <Navbar />
        </div>
      </header>

      <main style={styles.container}>
        <section style={styles.learningSection}>
          <img
            src="\pexels-photo-1194775.webp"
            alt="Learning Illustration"
            style={styles.image}
          />
          <div style={styles.learningText}>
            <h3>About EnerTransition</h3>
            <h2>Advancing Innovation, Empowering Minds.</h2>
            <div style={styles.learningBox}>
              <div>
                <h4>What It Is</h4>
                <p>
                  EnerTransition.com is a dedicated platform for sharing research
                  and preprints in the field of energy transition. As a unit of
                  Pro H2Vis Solutions, we serve as a hub for knowledge exchange
                  and innovation in sustainable energy.
                </p>
              </div>
            </div>
            <div style={styles.learningBox}>
              <div>
                <h4>What We Do</h4>
                <p>
                  We empower researchers by providing a space to publish their
                  work, share insights, and collaborate with a global community.
                  Our mission is to accelerate advancements in energy transition
                  through open access to cutting-edge research and meaningful
                  discussions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
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
    textAlign: "center"
  },
  container: {
    maxWidth: "1200px",
    margin: "auto",
    textAlign: "center"
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
    marginTop: "10px"
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    padding: "8px 12px",
    fontWeight: "bold",
    borderRadius: "5px",
    transition: "background 0.3s ease"
  },
  login: {
    marginLeft: "20px"
  },
  learningSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row", // Changed to row to place items side by side
    padding: "40px 20px",
    textAlign: "left",
    gap: "40px" // Added spacing between image and text
  },
  image: {
    width: "300px",
    borderRadius: "1ppx",
    flexShrink: 0 // Prevents image from shrinking
  },
  learningText: {
    maxWidth: "600px",
    textAlign: "left"
  },
  learningBox: {
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "8px",
    marginTop: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  }
};


export default About;
