function calculaArea(base:number, altura:number):number {
    return base * altura
}

const calculaArea2 = (base:number, altura:number): number => base * altura;

function somar(...numeros:number[]) {
    // numeros.reduce()
    console.log(numeros);
}

function teste(): number | string {
    if(10 > 5) {
        return '10 maior que 5'
    } else {
        return 5
    }
}

const resultadoDoTeste = teste()