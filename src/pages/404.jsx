import * as React from "react"
import { Link } from "gatsby"
import { SEO } from "../components/seo"

const pageStyles = {
  padding: "100px",
  height: "100vh",
  borderRadius: "0"
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  fontSize: "2em"
}

const paragraphStyles = {
  marginBottom: 48,
  fontSize: "1.2em"
}

const NotFoundPage = () => {
  return (
    <main className="ui inverted segment" style={pageStyles}>
      <h1 style={headingStyles}>Whoops! That's a 404.</h1>
      <p style={paragraphStyles}>
        Sorry! This page doesn't exist.
        <br />
        <br />
        <Link to="/">Go home.</Link>
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => (
  <SEO title="Page Not Found" />
)
