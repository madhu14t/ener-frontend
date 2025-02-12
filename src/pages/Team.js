import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer"; // Import Footer component
import Navbar from "../components/navbar";
const Team = () => {
  return (
    <div>
      <header style={styles.header}>
        <div style={styles.container}>
          
          <Navbar />
        </div>
      </header>

      <section style={styles.members}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Our Team</h2>
          <div style={styles.memberList}>
            {teamMembers.map((member, index) => (
              <div key={index} style={styles.member}>
                <img src={member.image} alt={member.name} style={styles.image} />
                <h3 style={styles.memberName}>{member.name}</h3>
                <p style={styles.role}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

// Team Members Data
const teamMembers = [
  {
    name: "Alan Munigety",
    role: "Team Lead, Backend Developer",
    image: "\WhatsApp Image 2025-02-05 at 18.29.15_bd7a3571.jpg"
  },
  {
    name: "Harshal Kumar",
    role: "Frontend Developer",
    image: "\photo_2025-02-08_11-41-47.jpg"
  },
  {
    name: "Yasaswi Kopparapu",
    role: "Backend Developer",
    image: "\photo_2025-02-08_11-41-36.jpg"
  },
  {
    name: "Dhanashree Patil",
    role: "Frontend Developer",
    image: "\photo_2025-02-08_11-41-41.jpg"
  },
  {
    name: "Mr Harshit Mittal",
    role: "Co-founder & Chief Executive Officer",
    image: "\WhatsApp Image 2025-02-08 at 11.45.17_4105c098.jpg"
  },
  {
    name: "Mr Vivek Yadav",
    role: "Co-founder & Chief of Management and Industrial Relations",
    image: "\WhatsApp Image 2025-02-08 at 11.45.17_a35c9872.jpg"
  }
];

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  header: {
    // backgroundColor: "#004080", // Dark blue
    padding: "20px",
    color: "#fff",
    textAlign: "center",
  },
  logo: {
    fontSize: "26px",
    fontWeight: "bold",
  },
  ener: {
    color: "#00ffcc",
  },
  trans: {
    color: "#ffcc00",
  },
  sition: {
    color: "#fff",
  },
  tagline: {
    display: "block",
    fontSize: "12px",
    fontStyle: "italic",
    color: "#ddd",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "10px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    padding: "8px 12px",
    borderRadius: "5px",
    backgroundColor: "#0059b3", // Lighter blue for contrast
    transition: "0.3s",
  },
  navLinkHover: {
    backgroundColor: "#0073e6", // Brighter blue on hover
  },
  members: {
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "25px",
    color: "#004080",
  },
  memberList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    justifyContent: "center",
  },
  member: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 5px 10px rgba(0,0,0,0.15)",
    transition: "0.3s",
  },
  memberHover: {
    transform: "scale(1.05)",
  },
  image: {
    width: "100%",
    height: "250px", // Taller vertical rectangle
    borderRadius: "10px", // Slight rounded corners
    objectFit: "cover",
    marginBottom: "15px",
    backgroundColor: "#f0f0f0", // Light background for image area
  },
  memberName: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#004080",
  },
  role: {
    fontSize: "14px",
    color: "#555",
    marginTop: "5px",
  },
};




export default Team;
