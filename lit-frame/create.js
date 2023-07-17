// create html file at runtime
const fs = require("fs");
const lib = (link, type) => {
    if(type == "module")
        return `<script src="${link}" type="module"></script>\n`;
    return `<script src="${link}"></script>\n`
}
const npm = (pkg, vers) => {
    return lib(`https://unpkg.com/${pkg}@${vers}`);
}

const htmx = () => {
    return npm("htmx.org", "1.9.3");
}

const link = (href, rel) => {
    return `<link href='${href}' rel='${rel}'></link>\n`;
}

const from = (file) => {
    return fs.readFileSync(file);
}

const build = (obj) => {
    var buf = "<head>";
    if("title" in obj)
        buf += `<title>${obj.title}</title>`;
    for(script of obj.scripts)
        buf += script;
    for(meta of obj.meta)
        buf += meta;
    buf += `</head>\n<body>${obj.body}</body>`;
    if("output" in obj)
        fs.writeFileSync(obj.output, buf);
}

module.exports = {build, npm, lib, from, link, htmx};