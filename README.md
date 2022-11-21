# melodell.github.io
Melina O'Dell's Personal Website

Source code lives on the `source` branch. \
GitHub Pages hosts from the `main` branch.

Serve locally at `localhost:8000`:

``` console
$ ./bin/run
cd docs/
python3 -m http.server 8000
```

Validate static HTML:

``` console
$ ./bin/validate
html5validator --ignore JAVA_TOOL_OPTIONS --root docs/
```

