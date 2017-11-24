class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._view = new View();
        this._negociacaoView = new NegociacaoView($('#negociacaoView'));
        this._negociacaoView.update(this._listaNegociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();
        let negociacao = this._criaNegociacao();
        this._listaNegociacoes.adiciona(negociacao);
        this._negociacaoView.update(this._listaNegociacoes);
        this._mensagem.texto = 'Negociacao adicionada com sucesso';
        this._mensagemView.update(this._mensagem);  
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