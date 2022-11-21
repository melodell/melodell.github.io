import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
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

export const Head = () => <title>Page Not Found</title>
