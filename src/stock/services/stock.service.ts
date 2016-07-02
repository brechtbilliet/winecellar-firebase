import {Injectable} from "@angular/core";
import {Wine} from "../entities/Wine";
import {AngularFire} from "angularfire2/angularfire2";
import {Observable} from "rxjs/Rx";

@Injectable()
export class StockService {
    constructor(private af: AngularFire) {
    }

    private get uid(): string {
        return this.af.auth.getAuth().uid;
    }

    add(wine: Wine): void {
        this.af.database.list(`/users/${this.uid}/wines/`).push(wine);
    }

    update(id: string, wine: Wine): void {
        let {description, image, inStock, myRating, name, price, region} = wine;
        this.af.database.object(`/users/${this.uid}/wines/${id}`).update({
            description,
            inStock,
            myRating,
            image,
            name,
            price,
            region
        });
    }

    remove(id: string): void {
        this.af.database.object(`/users/${this.uid}/wines/${id}`).remove();
    }

    setRate(id: string, myRating: number): void {
        this.af.database.object(`/users/${this.uid}/wines/${id}`).update({myRating});
    }

    setStock(id: string, inStock: number): void {
        this.af.database.object(`/users/${this.uid}/wines/${id}`).update({inStock});
    }

    fetchWine(id: string): Observable<Wine> {
        return this.af.database.object(`/users/${this.af.auth.getAuth().uid}/wines/${id}`);
    }
}