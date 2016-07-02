import {Injectable} from "@angular/core";
import {Credentials} from "../types/Credentials";
import {Account} from "../types/Account";
import * as toastr from "toastr";
import {AngularFire} from "angularfire2/angularfire2";
import {ApplicationState} from "../../common/state/ApplicationState";
import {Store} from "@ngrx/store";
import {enableBusy, disableBusy} from "../../common/actionCreators";
@Injectable()
export class AuthenticationService {
    constructor(private af: AngularFire, private store: Store<ApplicationState>) {
    }

    authenticate(credentials: Credentials): void {
        this.store.dispatch(enableBusy());
        this.af.auth.login({email: credentials.login, password: credentials.password}).then(
            () => {
                this.store.dispatch(disableBusy());

            },
            (resp: any) => {
                toastr.error(resp.message);
                this.store.dispatch(disableBusy());
            }
        );
    }

    register(account: Account): void {
        this.af.auth.createUser(Object.assign({}, account, {email: account.login})).then(
            (resp: any) => {
                this.af.database.object(`/users/${resp.uid}`).set(account);
                this.af.auth.login({email: account.login, password: account.password});
            },
            (resp: any) => {
                this.store.dispatch(disableBusy());
                toastr.error(resp.message);
            }
        );
    }

    logout(): void {
        this.af.auth.logout();
    }
}