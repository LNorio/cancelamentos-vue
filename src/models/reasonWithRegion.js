//Verificar porque não quer funcionar

import Region from "./region"

class ReasonRegion extends Region{
    contratoNovo = {
        'total': 0,
        'regions': new Region()
    };
    semCondicoes = {
        'total': 0,
        'regions': new Region()
    };
    mudouCidade = {
        'total': 0,
        'regions': new Region()
    }
    outraEmpresa = {
        'total': 0,
        'regions': new Region()
    };
    semInteresse = {
        'total': 0,
        'regions': new Region()
    }
    outroPlanoNosso = {
        'total': 0,
        'regions': new Region()
    };
    insatisfacao = {
        'total': 0,
        'regions': new Region()
    };
    titularFalecido = {
        'total': 0,
        'regions': new Region()
    };
    outros = {
        'total': 0,
        'regions': new Region()
    }

    defineReasonCountPlusRegion(reason, region){
  
        switch(reason.toUpperCase().trim()){
            case "SEM CONDIÇÕES FINANCEIRAS":
                this.semCondicoes.regions.defineCountRegion(region);
                this.semCondicoes.total++;
            break;
            case "FEZ CONTRATO NOVO":
                this.contratoNovo.regions.defineCountRegion(region);
                this.contratoNovo.total++;
            break;
            case "MUDOU DE CIDADE":
                this.mudouCidade.regions.defineCountRegion(region);
                this.mudouCidade.total++;
            break;
            case "PLANO DE OUTRA EMPRESA":
                this.outraEmpresa.regions.defineCountRegion(region);
                this.outraEmpresa.total++;
            break;
            case "NÃO TEM INTERESSE":
                this.semInteresse.regions.defineCountRegion(region);
                this.semInteresse.total++;
            break;
            case "INSATISFAÇÃO":
                this.insatisfacao.regions.defineCountRegion(region);
                this.insatisfacao.total++;
            break;
            case "TITULAR FALECIDO":
                this.titularFalecido.regions.defineCountRegion(region);
                this.titularFalecido.total++;
            break;
            case "ESTA EM OUTRO PLANO DA PAX":
                this.outroPlanoNosso.regions.defineCountRegion(region);
                this.outroPlanoNosso.total++;
            break;
            default:
                this.outros.regions.defineCountRegion(region);
                this.outros.total++;
        }
    }
}

export default ReasonRegion;