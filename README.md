# melodell.github.io
Melina O'Dell's Personal Website

Made with [Gatsby](https://www.gatsbyjs.com/).

Source code lives on the `source` branch. \
GitHub Pages hosts from the `main` branch.

### Why?
- Organized space to display/update achievements
- Somewhere simple to document some thoughts/learning experiences in blog posts without having to sign up for a platform
- Adds a link to my resume :)

### How?
- *Languages*: React, HTML, Markdown, a little CSS.
- [Gatsby](https://www.gatsbyjs.com/) for scalable static pages. Lighter weight than React, but with all the React magic.
- [Fomantic UI](https://fomantic-ui.com/) for clean, easy styling.
- GitHub Pages for easy deployment.

### Learning Goals
TBD (Learned Gatsby, GraphQL, Fomantic)


## Workflow
### Develop
Local development on `source` branch

Serve on `localhost:8000` with:
``` console
$ npx gatsby develop
```

Clear cache with:
```console
$ npx gatsby clean
```

### Deploy
Deploy `public/` with GitHub Pages on `main` after making changes:

``` console
$ npm run deploy
gatsby build
gh-pages -d public -b main
```
