import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom"; 
 
const PreprintDetails = () => { 
  const { id } = useParams(); 
  const [preprint, setPreprint] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(""); 
 
  useEffect(() => { 
    fetch(`http://localhost:5000/preprint/${id}`) 
      .then((res) => res.json()) 
      .then((data) => { 
        if (data.success) { 
          console.log("Fetched Data:", data.preprint); // Debugging log 
          setPreprint(data.preprint); 
        } else { 
          setError(data.error); 
        } 
        setLoading(false); 
      }) 
      .catch((err) => { 
        console.error("Error fetching preprint:", err); 
        setError("Failed to fetch preprint"); 
        setLoading(false); 
      }); 
  }, [id]); 
 
  if (loading) return <p>Loading...</p>; 
  if (error) return <p>{error}</p>; 
 
  return ( 
    <div> 
      <h2>{preprint.title}</h2> 
      <p><strong>By:</strong> {preprint.author}</p> 
      <p>{preprint.abstract}</p> 
      {preprint.doi && preprint.pdf ? (  
  <p>  
    <strong>DOI:</strong>{" "}  
    <a   
      href={`http://localhost:5000/uploads/${preprint.pdf}`}   
      target="_blank"   
      rel="noopener noreferrer"  
      style={{ color: "blue", textDecoration: "underline" }}  
    >  
      {preprint.doi}  
    </a>  
  </p>  
) : (  
  <p style={{ color: "red" }}>PDF not available</p>  
)} 
 
      {/* Display References */} 
      {preprint.references && preprint.references.length > 0 ? ( 
        <div> 
          <h3>References</h3> 
          <ul> 
            {preprint.references.map((ref, index) => ( 
              <li key={index}> 
                {ref.link ? ( 
                  <a href={ref.link} target="_blank" rel="noopener noreferrer"> 
                    {ref.title} 
                  </a> 
                ) : ( 
                  ref.title 
                )} 
              </li> 
            ))} 
          </ul> 
        </div> 
      ) : ( 
        <p>No references available.</p> 
      )} 
 
      {/* Display PDF Download */} 
      {preprint.pdf && ( 
        <div> 
          
          <a href={`http://localhost:5000/uploads/${preprint.pdf}`} download target="_blank" rel="noopener noreferrer"> 
      <button style={{ padding: "10px", background: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}> 
        Download PDF 
      </button> 
    </a> 
        </div> 
      )} 
    </div> 
  ); 
}; 
 
export default PreprintDetails;