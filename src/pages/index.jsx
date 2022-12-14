import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import 'fomantic-ui-css/semantic.min.css';

import { Seo } from "../components/seo";
import Navbar from "../components/navbar";
import Bio from "../components/bio";
import Activities from "../components/activities";
import Projects from "../components/projects";
import Footer from "../components/footer";

const pageStyles = {
  padding: "60px 10% 0 10%",
  border: "0px",
  borderRadius: "0px"
}

const IndexPage = () => {
  const [darkMode, setMode] = useState(true); // dark mode toggle; defaults to dark
  const changeMode = () => {
    const newMode = darkMode ? false : true;
    setMode(newMode);
  }

  // Resume file must start with "Resume"
  const resumeData = useStaticQuery(graphql`
    {
      file(extension: {eq: "pdf"}, name: {glob: "Resume*"}) {
          name
          publicURL  
      }
    }
  `)

  return (
    <main className={`ui ${darkMode ? "inverted" : ""} segment`} style={pageStyles}>
      <div className="ui text container" style={{maxWidth: "920px"}}>
        <Navbar darkMode={darkMode} modeChangeHandler={changeMode} resumeLink={resumeData.file.publicURL}/>
        <Bio darkMode={darkMode}/>
        <div className="ui divider"></div>
        <Activities darkMode={darkMode}/>
        <div className="ui divider"></div>
        <Projects darkMode={darkMode}/>
        <div className="ui divider"></div>
        <Footer darkMode={darkMode} resumeLink={resumeData.file.publicURL}/>
      </div>
    </main>
  )
}

export default IndexPage;

export const Head = () => (
  <Seo />
)
