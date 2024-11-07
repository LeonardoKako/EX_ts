"use strict";
const alunos = [
    {
        nome: 'carlos',
        cursos: ['x', 'y'],
        idade: 31
    },
    {
        nome: 'ana',
        cursos: ['x', 'z'],
        idade: 17
    },
];
alunos.push({ nome: 'leleo', cursos: ['x', 'y', 'z'], idade: 29 });
const novoAluno = {
    nome: 'Lucas',
    idade: 21,
};
function exibeAlunos(aluno) {
    console.log(aluno.nome);
}
