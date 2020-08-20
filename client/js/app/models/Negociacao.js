class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }
    // Testar tirar o getTime para ver se o mesmo funciona


    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

}