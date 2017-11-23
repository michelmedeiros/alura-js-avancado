class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {
        event.preventDefault();
        let negociacao = this._criaNegociacao();
        this._listaNegociacoes.adiciona(negociacao);
        this._limpaFormulario();
        console.log(this._listaNegociacoes.negociacoes);
    }

    _criaNegociacao() {
        let data = DateHelper.textoParaData(this._inputData.value);
        return new Negociacao(data, this._inputQuantidade.value, this._inputValor.value);
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0
        this._inputData.focus();
    }
}