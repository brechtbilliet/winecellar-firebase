import {Component, Output, Input, ChangeDetectionStrategy} from "@angular/core";
import {Wine} from "../../entities/Wine";
import {EventEmitter} from "@angular/router-deprecated/src/facade/async";
import {WineResult} from "../wine-result/wine-result.component";
@Component({
    selector: "wine-results",
    directives: [WineResult],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Region</th>
                    <th>In stock</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let wine of wines" [wineResult]="wine"
                    (setStock)="onSetStock(wine.$key, $event)" (setRate)="onSetRate(wine.$key, $event)" (remove)="onRemove(wine.$key)">
                </tr>
                <tr *ngIf="wines && wines.length === 0">
                    <td colspan="7">You haven't added any wines yet</td>
                </tr>
            </tbody>
        </table>
    `
})
export class WineResults {
    @Input() wines: Array<Wine>;
    @Output() remove = new EventEmitter<string>();
    @Output() setRate = new EventEmitter<{id: string, value: Number}>();
    @Output() setStock = new EventEmitter<{id: string, value: Number}>();

    public onSetRate(id: string, value: number): void {
        this.setRate.emit({id, value});
    }

    public onSetStock(id: string, value: number): void {
        this.setStock.emit({id, value});
    }

    public onRemove(id: string): void {
        this.remove.emit(id);
    }
}