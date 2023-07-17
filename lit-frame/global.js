class Component extends HTMLComponent 
{
    constructor(template)
    {
        this.template = template;
        this.states = {};
    }
    connectedCallback()
    {
        this.setup();
    }

    addState(name)
    {
        Object.defineProperty(this, name, {
            set: (x) => { this.innerHTML = this.template.resolve(x) },
            get: () => { return this.states[name]; }
        })
    }

    loadWasm(link, importMap)
    {
        fetch(link)
            .then((response) => response.arrayBuffer())
            .then((bytes) => WebAssembly.instantiate(bytes, importMap))
            .then((result) => this.exports = result.instance.exports);
    }
}

const loadTemplate = (link, _as) => {
    fetch(link).then(data => data.text())
    .then(text => {
        document.innerHTML += `<template id="${_as}">${text}</template>`;
    })
}

const App = {
    add(component)
    {

    }
}

export default { App, Component, loadTemplate };