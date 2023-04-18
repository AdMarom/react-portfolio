import React from 'react';
import { NavLink } from "react-router-dom";



const Navbar= () => {

  const styles = {
    link: {
      listStyle: "none"
    },
    nav: {
      display: "inline",
      marginLeft: "20px",
      marginRight: "5px"
    }
  }
    

    return (
        <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'futura',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <ul style={styles.link}>

        <li style={styles.nav}>
      <NavLink to="/about" activeClassName="active">About</NavLink>
    </li>
    <li style={styles.nav}>
      <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
    </li>
    <li style={styles.nav}>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    </li>
    <li style={styles.nav}>
      <NavLink to="/resume"  activeClassName="active">Resume</NavLink>
    </li>
        </ul>
      </section>
    </nav>
    )

}

export default Navbar;