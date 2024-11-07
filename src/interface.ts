class Conta {
    numeroDaConta: number;
    saldo: number = 0

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta
    }
}

class ContaSalario extends Conta {
    depositar(valor:number) {
        this.saldo += valor
    }
}

interface ITrancional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
    // transferir(valor:number, destinatario) {
    //     destinatario.saldo += valor
    // }
}

interface IExemplo2 {
    cnpj: number;
}

interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

class ContaCorrente extends Conta implements ITrancional, IExemplo3{
    transferir (valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true
    }
    taxaTransferencia: number = 0;
    cnpj = 123123214412
    telefone = 48999999999;
}