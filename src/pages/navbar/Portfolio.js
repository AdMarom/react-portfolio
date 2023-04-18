import React from 'react';
import Budgetly from '../../images/budgetly.png'
import Hitched from '../../images/hitched.png'
import Notetaker from '../../images/notetaker.png'
import Weatherapp from '../../images/weatherapp.png'
import Whatsgood from '../../images/whatsgood.png'
import Codequiz from '../../images/codequiz.png'


const Portfolio = () => {
//the "Project" component
  const styles = {
    div: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "1rem",
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
      width: "80%",
      margin: "auto",
      zIndex: 1 // set the z-index to 1 to place the div above the image
    },
    flexContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: "10px"
    },
    img: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "10px",
      opacity: 0.6,
      zIndex: 0 // set the z-index to 0 to place the image behind the div
    },
    buttonLink: {
      zIndex: 2, // set a higher z-index value for the button links
    },
    button: {
      backgroundColor: "white",
      opacity: 0.8,
      color: "black",
      border: "solid",
      borderRadius: "5px",
      padding: "0.5rem 1rem",
      margin: "0.5rem",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "bold",
      fontFamily: "futura"
    },
    h3: {
      backgroundColor: "white",
      zIndex: 2,
      fontFamily: "futura"
    }
  }

  return (
    <div>
      <div style={styles.flexContainer} >
        <div style={styles.div}>

          <h3 style={styles.h3}>Hitched</h3>
          <img style={styles.img} src={Hitched} alt={"webpreview"} />
          <a href="https://hitched.herokuapp.com/" target="_blank" rel="noopener noreferrer"  style={styles.buttonLink}>
          <button style={styles.button} >Delpoyed Application</button></a>
          <a href="https://github.com/AdMarom/Final-Project.git" target="_blank" rel="noopener noreferrer"  style={styles.buttonLink}>
          <button style={styles.button} >GitHub Repository</button></a>
        </div>

        <div style={styles.div}>
          <h3 style={styles.h3}>Budgetly</h3>
          <img style={styles.img} src={Budgetly} alt={"webpreview"} />
          <a href="https://budget-app-nodejs.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={styles.buttonLink}>
          <button style={styles.button} >Delpoyed Application</button></a>
          <a href="https://github.com/karinnesagir/Budgetly.git" target="_blank" rel="noopener noreferrer" style={styles.buttonLink}>
          <button style={styles.button} >GitHub Repository</button></a>
        </div>

        <div style={styles.div}>
          <h3 style={styles.h3}>Coding Quiz</h3>
          <img style={styles.img} src={Codequiz} alt={"webpreview"} />
          <a href="https://admarom.github.io/Code-Quiz-Challenge/" target="_blank" rel="noopener noreferrer" style={styles.buttonLink}>
          <button style={styles.button} >Delpoyed Application</button></a>
          <a href="https://github.com/AdMarom/Code-Quiz-Challenge.git" target="_blank" rel="noopener noreferrer" style={styles.buttonLink}>
          <button style={styles.button} >GitHub Repository</button></a>
        </div>

        <div style={styles.div}>
          <h3 style={styles.h3}>Weather Application</h3>
          <img style={styles.img} src={Weatherapp} alt={"webpreview"} />
          <a href="https://admarom.github.io/Weather-Application/" target="_blank" rel="noopener noreferrer" style={styles.buttonLink}>
          <button style={styles.button} >Delpoyed Application</button></a>
          <a href="https://github.com/AdMarom/Weather-Application.git" target="_blank" rel="noopener noreferrer" style={styles.buttonLink}>
          <button style={styles.button} >GitHub Repository</button></a>
        </div>

        <div style={styles.div}>
          <h3 style={styles.h3}>What's Good</h3>
          <img style={styles.img} src={Whatsgood} alt={"webpreview"} />
          <a href="https://admarom.github.io/WhatsGood-SearchEvents/" target="_blank" rel="noopener noreferrer" style={styles.buttonLink}>
          <button style={styles.button}>Delpoyed Application</button></a>
          <a href="https://github.com/AdMarom/WhatsGood-SearchEvents.git" target="_blank" rel="noopener noreferrer" style={styles.buttonLink}>
          <button style={styles.button}>GitHub Repository</button></a>
        </div>

        <div style={styles.div}>
          <h3 style={styles.h3}>Note Taker</h3>
          <img style={styles.img} src={Notetaker} alt={"webpreview"} />
          <a href="https://note-taker-app-1000.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={styles.buttonLink}>
          <button style={styles.button}>Delpoyed Application</button></a>
          <a href="https://github.com/AdMarom/Note-Taker-Challenge.git" target="_blank" rel="noopener noreferrer" style={styles.buttonLink}>
          <button style={styles.button}>GitHub Repository</button></a>
        </div>
      </div>


    </div>
  );
}
export default Portfolio;
