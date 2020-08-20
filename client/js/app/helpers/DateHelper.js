class DateHelper {

    constructor() {
        throw new Error("DataHelper não pode ser instanciada");
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }

    static textoParaData(texto) {
        return new Date(...texto
            .split('-')
            .map((item, indice) => item - indice % 2));
    }
}







// Criando os métodos statics, faz com que o lugar
// onde estamos chamando o método seja acessado sem 
// instância (sem dar um new). A finalidade disso
// é evitar ter que, sempre que o método for chamado,
// não ter que instanciar um novo objeto. 


// Usei o throw para mostrar um erro, já que como ele
// está lançando um static, evita assim que a classe 
// seja instanciada.