let numeros = [3, 2, 11, 20, 8, 7];

let resultado = numeros.map((item) => {
    if ((item % 2)) return item * 2;

    return item;
})
console.log("Primeiro teste");
console.log("primeiro resultado: ", resultado);

/****************************/

let array = [10, 50];

function somaDoisNumeros(n1, n2) {
    return n1 + n2;
}
console.log("Segundo teste")
console.log(somaDoisNumeros(...array));

/****************************/

class Aluno {
    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {
    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}


let avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cassio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];




let aprovados = avaliacoes
    .filter(function (prova) {
        return prova.nota >= 7;
    }).map(function (prova) {
        return prova.aluno.nome;
    });

let reprovados = avaliacoes
    .filter((prova) => prova.nota <= 7)
    .map((prova) => prova.aluno.nome);


console.log("Sem arrow functions(aprovados): ", aprovados);
console.log("Com arrow functions(reprovados): ", reprovados);