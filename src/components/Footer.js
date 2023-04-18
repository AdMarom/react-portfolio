
import React from 'react';
import { SocialIcon } from 'react-social-icons';


function Footer() {

    const styles = {
        icon: {
            margin: "20px"
        }
    }

    return (
        <div>



            <SocialIcon style={styles.icon} url="https://github.com/AdMarom" target="_blank" />
            <SocialIcon style={styles.icon} url="https://www.linkedin.com/in/adena-marom-6bb962119/" target="_blank" />
            <SocialIcon style={styles.icon} url="https://stackoverflow.com/users/21653934/admarom" target="_blank" />


        </div>
    )

}

export default Footer;