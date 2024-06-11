class Region{
    dourados = {
        'label': 'Dourados',
        'total': 0
    };
    ms = {
        'label': 'Mato Grosso do Sul',
        'total': 0
    };
    ponta = {
        'label': 'Ponta Porã',
        'total': 0
    };
    conesul = {
        'label': 'Conesul',
        'total': 0
    };
    pr = {
        'label': 'Paraná',
        'total': 0
    };
    go = {
        'label': 'Goias',
        'total': 0
    };
    rj = {
        'label': 'Rio de Janeiro',
        'total': 0
    };
    py = {
        'label': 'Paraguay',
        'total': 0
    };
    mt = {
        'label': 'Mato Grosso',
        'total': 0
    };

    defineCountRegion(region){
        switch (region.toUpperCase().trim()) {
            case "DOURADOS":
                this.dourados.total ++;
                break;
            case "MS":
                this.ms.total ++;
                break;
            case "PONTA":
                this.ponta.total ++;
                break;
            case "CONESUL":
                this.conesul.total ++;
                break;
            case "PR":
                this.pr.total ++;
                break;
            case "GO":
                this.go.total ++;
                break;
            case "RJ":
                this.rj.total ++;
                break;
            case "PY":
                this.py.total ++;
                break;
            case "MT":
                this.mt.total ++;
                break;
            default:
            break;
        }
    }
}

export default Region;