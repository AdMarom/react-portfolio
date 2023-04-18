import React, { useState } from "react";
import Button from 'react-bootstrap/Button';



const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emptyFieldError, setEmptyFieldError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const styles = {
    border: {
      border: "solid",
      marginLeft: "400px",
      marginRight: "400px",
      height: "400px",
    },
    text: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "10vh"
    },
    label: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setEmptyFieldError("");
    if (!name || !email || !message) {
      setEmptyFieldError("Please fill out all fields.");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    // Handle form submission logic here
    console.log(name, email, message);
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };


  return (
    <>
      {submitted ? (
        <div>Thank you for your submission!</div>
      ) : (

        <div style={styles.border}  >
          <h2 style={styles.text}>Contact</h2>

          <form onSubmit={handleSubmit}>
            <label style={styles.label}>
            <h3>Name:</h3>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label style={styles.label}>
              <h3>Email:</h3>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div style={{ color: "red" }}>{emailError}</div>}
            </label>
            <br />
            <label style={styles.label}>
            <h3>Message:</h3>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <br />
            <div style={styles.label}>
            <Button variant="primary" as="input" type="submit" value="Submit" />{' '}
            </div>
            
            {emptyFieldError && <div style={{ color: "red" }}>{emptyFieldError}</div>}
          </form>
        </div>
      )}
    </>
  );
}
export default Contact;
