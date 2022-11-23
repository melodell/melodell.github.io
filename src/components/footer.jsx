import React from "react"

const footerStyles = {
    width: '70%',
    margin: '0 auto',
    paddingBottom: '20px',
    textAlign: 'Center',
    fontSize: '1.1em'
}

const pad = {
    padding: '1px'
}

const Footer = ({ darkMode, resumeLink }) => (
    <footer id="contact" className={`ui ${darkMode ? "inverted" : ""} footer container`} style={footerStyles}>
        <h2>Contact Me</h2>
        <div className={`ui ${darkMode ? "inverted" : ""} two column  stackable grid`} style={{padding: '10px 0 30px 0'}}>
            <div className="column">
                <div className="ui list">
                    <div style={pad}>
                        <i className="graduation cap icon"></i> 
                        <a href="mailto: melodell@umich.edu"> melodell@umich.edu</a>
                    </div>
                    <div style={pad}>
                        <i className="envelope icon"></i>
                        <a href="mailto: melinaodell48@gmail.com"> melinaodell48@gmail.com</a>
                    </div>
                    <div style={pad}>
                        <i className="phone icon"></i>
                        <span> (989) 860-2581</span>
                    </div>
                </div>
                
            </div>
            <div className="column">
                <div className="ui list">
                    <div style={pad}>
                        <i className="linkedin icon"></i> 
                        <a href="https://www.linkedin.com/in/melina-odell/" target="_blank"> Melina O'Dell on LinkedIn</a>
                    </div>
                    <div style={pad}>
                        <i className="github icon"></i>
                        <a href="https://github.com/melodell" target="_blank"> melodell on GitHub</a>
                    </div>
                    <div style={pad}>
                        <i className="file alternate icon"></i>
                        <a href={resumeLink} target="_blank">Resume</a>
                    </div>
                </div>
            </div>
        </div>
        <span>Updated 2022</span>
    </footer>
);

export default Footer;