class View {

    _template() {
        throw new Error('O método template deve ser implementado.');
    }

    constructor(elemento) {
        this._elemento = elemento;
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}