import React from 'react';
import './Footer.scss'

function Footer(props) {
    return (
        <div>
            
			<section className="footer">
				<div className="footer__socials">
					<a href="mailto:aimedia.flow@gmail.com?subject=Im a client i would ask !" target='_blank'>
						<img
							src="./twitter.png"
							alt=""
							className="footer__socials__icon"
						/>
					</a>
					


				</div>
				<p className="footer__copyrights-text">Copyright © AIBC. All Rights Reserved.</p>
			</section>
        </div>
    );
}

export default Footer;