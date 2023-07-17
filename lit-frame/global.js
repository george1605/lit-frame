Component.lazy = (func) => {
    this.setAttribute("use:lazy", func.toString());
}
