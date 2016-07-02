import {Injectable} from "@angular/core";
import {Wine} from "../entities/Wine";
import {StockService} from "../services/stock.service";

@Injectable()
export class AddStockPageSandbox {
    constructor(private stockService: StockService) {
    }

    addWine(wine: Wine): void {
        this.stockService.add(wine);
    }
}