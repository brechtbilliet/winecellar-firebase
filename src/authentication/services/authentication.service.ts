import {Injectable} from "@angular/core";
import {Credentials} from "../types/Credentials";
import {Account} from "../types/Account";
import * as toastr from "toastr";
import {AngularFire} from "angularfire2/angularfire2";
@Injectable()
export class AuthenticationService {
    constructor(private af: AngularFire) {
    }

    authenticate(credentials: Credentials): void {
        this.af.auth.login({email: credentials.login, password: credentials.password}).then(
            () => {},
            (resp: any) => {
                toastr.error(resp.message);
            }
        );
    }

    register(account: Account): void {
        this.af.auth.createUser(Object.assign({}, account, {email: account.login})).then(
            (resp: any) => {
                this.af.database.object(`/users/${resp.uid}`).set(account);
                this.af.auth.login({email: account.login, password: account.password});
            },
            (resp: any) => toastr.error(resp.message)
        );
    }

    logout(): void {
        this.af.auth.logout();
    }
}