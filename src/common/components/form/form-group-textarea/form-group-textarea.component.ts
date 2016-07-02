import {Input, Component, ChangeDetectionStrategy} from "@angular/core";
import {Control} from "@angular/common";
@Component({
    selector: "form-group-textarea",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="form-group has-feedback" [class.has-success]="control.valid && control.dirty">
            <label class="col-sm-4 control-label">{{label}}</label>
             <div class="col-sm-8">
                <textarea
                    [ngFormControl]="control" 
                    class="form-control input-lg" 
                    placeholder="{{placeholder}}"></textarea>
                    <span *ngIf="control.valid && control.dirty" 
                    class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
            </div>
        </div>
    `
})
export class FormGroupTextarea {
    @Input() control: Control;
    @Input() label: string;
    @Input() placeholder: string;
}