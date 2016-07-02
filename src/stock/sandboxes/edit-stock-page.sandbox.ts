import {Injectable} from "@angular/core";
import {Wine} from "../entities/Wine";
import {StockService} from "../services/stock.service";
import {Observable} from "rxjs/Rx";
import {AngularFire} from "angularfire2/angularfire2";

@Injectable()
export class EditStockPageSandbox {
    constructor(private StockService: StockService, private af: AngularFire) {
    }

    updateWine(id: string, wine: Wine): void {
        this.StockService.update(id, wine);
    }

    fetchWine(id: string): Observable<Wine> {
        return this.StockService.fetchWine(id);
    }
}
