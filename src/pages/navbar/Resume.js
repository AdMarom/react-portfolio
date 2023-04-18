import React from 'react';
import { useState, useEffect } from "react";
import resume from "../../assets/Resume.pdf"
import Button from 'react-bootstrap/Button';

const Resume = () => {

  const styles = {
    li: {
      listStyle: "none",
      marginLeft: "10px"
    }
  }

  const [downloading, setDownloading] = useState(false);
  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Adena_Marom_Resume.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div style={styles.li} >
      <div>
        <p>
          <h3>Technical Skills:</h3>
          <li>Proficiency in one or more server-side programming languages</li>
          <li>Proficiency in one or more client-side programming languages (such as HTML, CSS, and JavaScript)</li>
          <li> Experience with web application frameworks (such as React)</li>
          <li>Familiarity with database technologies (such as MySQL & MongoDB)</li>
          <li>Experience with version control tools (such as Git)</li>
          <li>Understanding of web services</li>
          <li>Understanding of server architecture and deployment</li>
          
          <br></br>
          <br></br>

          <h3>Soft Skills:</h3>
          <li>Strong problem-solving skills</li>
          <li>Ability to work independently and as part of a team</li>
          <li>Strong communication skills</li>
          <li>Ability to prioritize and manage multiple tasks simultaneously</li>
          <li>Attention to detail</li>
          <li>Willingness to learn and adapt to new technologies and tools</li>
          <li>Time management and organizational skills</li>
          
        </p>
      </div>
      <div className="buttonContainer">
        <Button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
          {downloading ? "Downloading..." : "Download Resume"}
        </Button>{" "}
      </div>
    </div>
  );
}
export default Resume;
