import {Injectable} from "@angular/core";
import {Wine} from "../entities/Wine";
import {StockService} from "../services/stock.service";
import {AngularFire} from "angularfire2/angularfire2";
import {Observable} from "rxjs/Rx";

@Injectable()
export class StockPageSandbox {
    wines$: Observable<Array<Wine>> = this.af.database.list(`users/${this.af.auth.getAuth().uid}/wines`);

    constructor(private stockService: StockService, private af: AngularFire) {
    }

    removeWine(id: string): void {
        this.stockService.remove(id);
    }

    setRate(id: string, rate: number): void {
        this.stockService.setRate(id, rate);
    }

    setStock(id: string, inStock: number): void {
        this.stockService.setStock(id, inStock);
    }
}