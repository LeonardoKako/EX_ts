type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos: object[] = [
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
]

alunos.push({nome:'leleo', cursos: ['x', 'y', 'z'], idade: 29})

const novoAluno: aluno = {
    nome: 'Lucas',
    idade: 21,
}

function exibeAlunos(aluno: aluno) {
    console.log(aluno.nome);
}