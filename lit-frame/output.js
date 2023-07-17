const {htmx, from, build, lib, link} = require('./create');

build({
    scripts: [htmx(), lib("./global.js", "module")],
    meta: [link("global.css", "stylesheet")],
    body: from("shell.html"),
    title: "Ma best page",
    output: "pages/index.html"
})