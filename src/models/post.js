class post {

    VALOR = ""
    OPTION = 0
    TRM = ""

    constructor() {

    }

    constructor(valor, option, trm) {
        this.VALOR = valor;
        this.OPTION = option;
        this.TRM = trm;
    }

    getValor() {
        return this.VALOR;
    }

    getOption() {
        return this.OPTION;
    }

    getTrm() {
        return this.TRM;
    }

    setValor(valor) {
        this.VALOR = valor;
    }

    setOption(option) {
        this.OPTION = option;
    }

    setTrm(trm) {
        this.TRM = trm;
    }
}