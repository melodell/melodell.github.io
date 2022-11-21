import React, { useState } from "react"
import { Link, useScrollRestoration } from "gatsby"
import { SEO } from "../components/seo"
import Navbar from "../components/navbar"

const pageStyles = {
  // background: "#1b1c1d",
  padding: "60px 10% 0 10%",
  height: "100vh",
  borderRadius: "0"
}

const IndexPage = () => {
  const [darkMode, setMode] = useState(true); // dark mode toggle; defaults to dark
  const changeMode = () => {
    const newMode = darkMode ? false : true;
    setMode(newMode);
  }

  return (
    <main className={`ui ${darkMode ? "inverted" : ""} segment`} style={pageStyles}>
      <Navbar darkMode={darkMode} modeChangeHandler={changeMode}/>
      <h1>Melina O'Dell</h1>
      {/* <Link to="/posts">Posts</Link> */}
      <p>Makin' websitez</p>
    </main>
  )
}

export default IndexPage;

export const Head = () => (
  <SEO />
)
