const {htmx, from, build, lib, link, seo} = require('./create');

build({
    scripts: [htmx(), lib("https://unpkg.com/ui-wall@1.7.5/code.js"),
              lib("https://unpkg.com/restre-web-comps@1.2.5/index.js"), lib("./global.js"),],
    meta: [link("global.css", "stylesheet"), seo("og:title", "Ma best page")],
    body: from("shell.html"),
    title: "Ma best page",
    output: "pages/index.html"
})

