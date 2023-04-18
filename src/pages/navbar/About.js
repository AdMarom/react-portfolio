import React from 'react';
import Avatar from '../../images/Avatar.png'

const About = () => {

  const styles ={
    image: {
      width: "75px",
      height: "auto",
    },
    imageDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "10vh"
    },
    message: {
      textAlign: "center",
      marginLeft: "250px",
      marginRight: "250px"
    }
  }

  return (
    <div>
      <div>
        <div style={styles.imageDiv} >
        <img style={styles.image} src={Avatar} alt="avatar" />
        </div>

        <p style={styles.message} >
          Greetings!
          <br></br> 
          Thank you for taking the time to review my portfolio and get to know me. I am based in California, but I am willing to relocate for the right opportunity.
          As of now, I am working towards becoming a full stack web developer. While my forte lies in front-end development, I am also keen on enhancing my knowledge of back-end development. 
          <br></br>
          Feel free to check out my portfolio tab to view my work!
        </p>

      </div>
    </div>
  );
}
export default About;

