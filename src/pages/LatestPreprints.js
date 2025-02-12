import React, { useState, useEffect } from "react"; 
import Footer from "../components/footer"; 
import Navbar from "../components/navbar"; 
const LatestPreprints = () => { 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [results, setResults] = useState([]); 
  const [preprints, setPreprints] = useState([]); 
 
  useEffect(() => { 
    fetch("https://ener-backend-1.onrender.com/latestpreprints") 
      .then((res) => res.json()) 
      .then((data) => setPreprints(data)) 
      .catch((err) => console.error(err)); 
  }, []); 
 
  const handleSearch = (e) => { 
    e.preventDefault(); 
    fetch(`https://ener-backend-1.onrender.com/search?query=${searchQuery}`) 
      .then((res) => res.json()) 
      .then((data) => setResults(data)) 
      .catch((err) => console.error(err)); 
  }; 
 
  return ( 
    <div> 
      <header style={styles.hheader}> 
        <div style={styles.ccontainer}> 
        
          <Navbar /> 
          <form onSubmit={handleSearch} style={styles.searchForm}> 
            <input 
              type="text" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              placeholder="Search by title or author" 
              required 
              style={styles.searchInput} 
            /> 
            <button type="submit" style={styles.searchButton}>Search</button> 
          </form> 
        </div> 
      </header> 
 
      <main style={styles.container}> 
        {searchQuery ? ( 
          <div> 
            <h2>Search Results for "{searchQuery}"</h2> 
            {results.length > 0 ? ( 
              <ul style={styles.preprintList}> 
                {results.map((preprint) => ( 
                  <li key={preprint._id} style={styles.preprintItem}> 
                    <h3> 
                      <a href={`/preprint/${preprint._id}`} style={styles.titleLink}> 
                        {preprint.title} 
                      </a> 
                    </h3> 
                    <p style={styles.author}>By {preprint.author}</p> 
                  </li> 
                ))} 
              </ul> 
            ) : ( 
              <p>No results found.</p> 
            )} 
          </div> 
        ) : ( 
          <section style={styles.preprints}> 
            <h2>Latest Preprints</h2> 
            <ul style={styles.preprintList}> 
              {preprints.map((preprint) => ( 
                <li key={preprint._id} style={styles.preprintItem}> 
                  <h3> 
                    <a href={`/preprint/${preprint._id}`} style={styles.titleLink}> 
                      {preprint.title} 
                    </a> 
                  </h3> 
                  <p style={styles.author}>By {preprint.author}</p> 
                  <p style={styles.abstract}>{preprint.abstract}</p> 
                  {preprint.doi && <p><strong>DOI:</strong> {preprint.doi}</p>} 
                </li> 
              ))} 
            </ul> 
          </section> 
        )} 
        <a href="/" style={styles.button}>Back to Home</a> 
        
        
      </main> 
      <Footer /> 
    </div> 
  ); 
};

const styles = {
  hheader: {
    backgroundColor: "#0073e6",
    padding: "15px",
    color: "white",
  },
  ccontainer: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "20px",
  },

  searchForm: {
    display: "flex",
    justifyContent: "flex-end", // Moves search bar to the right
    marginTop: "-60px", 
    display: "flex",
    gap: "10px",
  },
  searchInput: {
    padding: "8px",
    fontSize: "16px",
    width: "250px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  searchButton: {
    padding: "8px 12px",
    backgroundColor: "#005bb5",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  preprints: {
    marginTop: "20px",
  },
  preprintList: {
    listStyleType: "none",
    padding: "0",
  },
  preprintItem: {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "5px",
    textAlign: "left",
  },
  titleLink: {
    textDecoration: "none",
    color: "#0073e6",
    fontWeight: "bold",
  },
  author: {
    fontSize: "14px",
    color: "#666",
  },
  abstract: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#333",
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#0073e6",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "16px",
  },
};

export default LatestPreprints;
