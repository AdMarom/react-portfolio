import React from 'react';

function Header() {
    
    const styles = {

        heading: {
            fontFamily: "futura",
            marginBottom: ".5px",
            marginLeft: "10px"
        }
    }


    return (
        <div>
            <h1 style={styles.heading}> Adena Marom </h1>
            <h4 style={styles.heading}> Full Stack Web Development</h4>
        </div>
    )

}

export default Header;