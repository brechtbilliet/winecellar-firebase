import {Component, Output, Input, ChangeDetectionStrategy} from "@angular/core";
import {EventEmitter} from "@angular/router-deprecated/src/facade/async";
import {Wine} from "../../entities/Wine";
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {Rating} from "../../../common/components/rating/rating.component";
import {NumberPicker} from "../../../common/components/number-picker/number-picker.component";
@Component({
    selector: "[wineResult]",
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [ROUTER_DIRECTIVES, NumberPicker, Rating],
    template: `
        <td><img src="{{wine.image}}">{{id}}</td>
        <td>{{wine.name}}</td>
        <td>{{wine.region}}</td>
        <td style="min-width:80px;">
            <number-picker [amount]="wine.inStock" (setAmount)="onSetStock($event)"></number-picker>
        </td>
        <td>{{wine.price}}</td>
        <td><rating [big]="true" [rating]="wine.myRating" (setRate)="onSetRate($event)"></rating></td>
        <td>
             <div class="pull-right">
                <div class="btn-group">
                    <a class="btn btn-lg btn-primary" [routerLink]="['/EditWine', {id: wine.$key}]">
                        <i class="fa fa-pencil"></i>
                    </a>
                    <button class="btn btn-lg btn-danger" (click)="onRemove(wine)"><i class="fa fa-trash-o"></i></button>
                </div>
            </div>
        </td>
    `
})
export class WineResult {
    @Input("wineResult") wine: Wine;
    @Output() remove = new EventEmitter();
    @Output() setRate = new EventEmitter<number>();
    @Output() setStock = new EventEmitter<number>();

    onSetRate(value: number): void {
        this.setRate.emit(value);
    }

    onSetStock(value: number): void {
        this.setStock.emit(value);
    }

    onRemove(): void {
        this.remove.emit(null);
    }
}
