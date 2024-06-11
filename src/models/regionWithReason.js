import Reason from "./reason";

class RegionReason extends Reason{
    dourados = {
        'total': 0,
        'reasons': new Reason()
    };
    ms = {
        'total': 0,
        'reasons': new Reason()
    };
    ponta = {
        'total': 0,
        'reasons': new Reason()
    };
    conesul = {
        'total': 0,
        'reasons': new Reason()
    };
    pr = {
        'total': 0,
        'reasons': new Reason()
    };
    go = {
        'total': 0,
        'reasons': new Reason()
    };
    rj = {
        'total': 0,
        'reasons': new Reason()
    };
    py = {
        'total': 0,
        'reasons': new Reason()
    };
    mt = {
        'total': 0,
        'reasons': new Reason()
    };

    defineCountRegionPlusReason(region, reason) {
        switch (region.toUpperCase().trim()) {
            case "DOURADOS":
                this.dourados.reasons.defineReasonCount(reason);
                this.dourados.total ++;
                break;
            case "MS":
                this.ms.reasons.defineReasonCount(reason);
                this.ms.total ++;
                break;
            case "PONTA":
                this.ponta.reasons.defineReasonCount(reason);
                this.ponta.total ++;
                break;
            case "CONESUL":
                this.conesul.reasons.defineReasonCount(reason);
                this.conesul.total ++;
                break;
            case "PR":
                this.pr.reasons.defineReasonCount(reason);
                this.pr.total ++;
                break;
            case "GO":
                this.go.reasons.defineReasonCount(reason);
                this.go.total ++;
                break;
            case "RJ":
                this.rj.reasons.defineReasonCount(reason);
                this.rj.total ++;
                break;
            case "PY":
                this.py.reasons.defineReasonCount(reason);
                this.py.total ++;
                break;
            case "MT":
                this.mt.reasons.defineReasonCount(reason);
                this.mt.total ++;
                break;
            default:
            break;
        }
    }
}

export default RegionReason;