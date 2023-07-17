Component.prototype.lazy = (func) => {
    this.element.setAttribute("use:lazy", func.toString());
}

Component.prototype.modal = (mode) => {
    return UI.modal(this.element.innerHTML, mode || 'open');
}