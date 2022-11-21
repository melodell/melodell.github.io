import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />

        {/* Fomantic UI Styles (Credit to and inspired by eecs485.org) */}
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.9.0/dist/semantic.min.css"/>
        <script src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.9.0/dist/semantic.min.js"></script>
        
        {children}
    </>
  )
}