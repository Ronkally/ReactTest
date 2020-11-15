import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return (
        <div className="footer">
            Síguenos en nuestras redes sociales:
            <div className="footer_socialmedia">
                <FacebookIcon fontSize="large"/>
                <InstagramIcon fontSize="large"/>
                <TwitterIcon fontSize="large"/>
            </div>
        </div>
    )
}

export default Footer
