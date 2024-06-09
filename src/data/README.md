# Data Specs + Update Instructions

## bio.json

Contains biography sentences to be displayed in `Intro.astro`.

```json
{
    "bios": [
        ...,
        ...,
    ]
}
```

## papers.json

Contains ordered data on papers to be displayed in `Papers.astro`.
Papers are categorized by publication or coursework. Each contains a title, an ordered list of authors, a date, and a link to the PDF stored in `public/papers/`. Publications also have conference data.

```json
{
    "publications": [
        {
            "title": "FIXME",
            "authors": [
                ...
            ],
            "conference": "FIXME",
            "date": "FIXME month and year",
            "pdfLink": "FIXME link, relative to public/ (/papers/...)"
        },
        ...
    ],
    "coursePapers": [
        {
            "title": "FIXME",
            "authors": [
                ...
            ],
            "date": "FIXME month and year",
            "pdfLink": "FIXME link, relative to public/ (/papers/...)"
        },
        ...
    ]
}
```

## projects.json

Contains ordered data on projects to be displayed as cards in `Projects.astro`.
Projects have a title, a summary, a list of technologies used, an emoji corresponding to a [Fomantic UI emoji name](https://fomantic-ui.com/elements/emoji.html), a promo line, an optional URL to a repo/example, and a longer description.

```json
{
    "projects": [
        {
            "title": "FIXME",
            "summary": "FIXME",
            "tech": [
                ...
            ],
            "description": "FIXME",
            "url": "FIXME",
            "emoji": "FIXME",
            "promo": "FIXME"
        },
        ...
    ]
}
```

## sections.json

Contains a list of sections to be displayed in the sidebar. Each section has a name (displayed) and an anchor to navigate to when clicked.
If the section is contained/hidden within a category, specify the optional category to force the page to swap categories when the anchor is clicked.

```json
{
   "sections": [
      {
         "name": "Projects",
         "href": "#projects",
         "category": "engineering"
      },
      {
         "name": "Papers",
         "href": "#papers",
         "category": "academic"
      },
      ...
      {
         "name": "Contact",
         "href": "#contact"
      }
   ]
}
```

## socials.json

Contains data on social media/contact info to be displayed in `Contact.astro` at the bottom of the page.

```json
{
    "email": {
        "umich": "<melodell@umich.edu>",
        "personal": "<melinaodell48@gmail.com>"
    },
    "linkedin": "<https://www.linkedin.com/in/melina-odell/>",
    "github": "<https://github.com/melodell>"
}
```
