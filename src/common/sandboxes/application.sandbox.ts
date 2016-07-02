import {Injectable} from "@angular/core";
import {ApplicationState} from "../state/ApplicationState";
import {Store} from "@ngrx/store";
import {AuthenticationService} from "../../authentication/services/authentication.service";
import {AngularFire} from "angularfire2/angularfire2";
@Injectable()
export class ApplicationSandbox {
    isBusy$ = this.store.select(state => state.containers.application.isBusy);
    auth$ = this.af.auth.asObservable();
    account$ = this.auth$.flatMap(value => this.af.database.object(`/users/${value.uid}`));
    isAuthenticated$ = this.auth$.map(auth =>  auth === null ? false : true);

    constructor(private store: Store<ApplicationState>, private authenticationService: AuthenticationService, private af: AngularFire) {
    }

    logout(): void {
        this.authenticationService.logout();
    }
}