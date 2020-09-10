class MensagemView extends View {

    constructor(elemento) {
        super(elemento)
    }

    template(model) {
        return `<p class="alert alert-success text-center mt-3">${model.texto}</p>`
    }


}