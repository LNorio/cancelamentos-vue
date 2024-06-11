class Reason{
    contratoNovo = {
        'label': 'Realizou contrato novo',
        'total': 0
    };
    semCondicoes = {
        'label': 'Sem condições financeiras',
        'total': 0
    };
    mudouCidade = {
        'label': 'Se mudou de cidade',
        'total': 0
    };
    outraEmpresa = {
        'label': 'Foi para outra empresa',
        'total': 0
    };
    semInteresse = {
        'label': 'Não tem mais interesse',
        'total': 0
    };
    outroPlanoNosso = {
        'label': 'Está em outro plano da Pax',
        'total': 0
    };
    insatisfacao = {
        'label': 'Insatisfação',
        'total': 0
    };
    titularFalecido = {
        'label': 'Titular faleceu',
        'total': 0
    };
    outros = {
        'label': 'Outros motivos',
        'total': 0
    };

    defineReasonCount(reason){
        switch(reason.toUpperCase().trim()){
            case "SEM CONDIÇÕES FINANCEIRAS":
                this.semCondicoes.total++;
            break;
            case "FEZ CONTRATO NOVO":
                this.contratoNovo.total++;
            break;
            case "MUDOU DE CIDADE":
                this.mudouCidade.total++;
            break;
            case "PLANO DE OUTRA EMPRESA":
                this.outraEmpresa.total++;
            break;
            case "NÃO TEM INTERESSE":
                this.semInteresse.total++;
            break;
            case "INSATISFAÇÃO":
                this.insatisfacao.total++;
            break;
            case "TITULAR FALECIDO":
                this.titularFalecido.total++;
            break;
            case "ESTA EM OUTRO PLANO DA PAX":
                this.outroPlanoNosso.total++;
            break;
            default:
                this.outros.total++;
        }
    }
}

export default Reason