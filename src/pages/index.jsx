import * as React from "react"
import { Link } from "gatsby"
import { SEO } from "../components/seo"
import Navbar from "../components/navbar"

const pageStyles = {
  background: "#1b1c1d",
  padding: "20px 10% 0 10%",
  height: "100vh",
  borderRadius: "0"
}

const IndexPage = () => {
  return (
    <main className="ui inverted segment" style={pageStyles}>
      <Navbar />
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/posts">Posts</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

export default IndexPage;

export const Head = () => (
  <SEO />
)
