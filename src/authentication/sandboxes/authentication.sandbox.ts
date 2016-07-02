import {Injectable} from "@angular/core";
import {Credentials} from "../types/Credentials";
import {Account} from "../types/Account";
import {AuthenticationService} from "../services/authentication.service";

@Injectable()
export class AuthenticationSandbox {
    constructor(private authenticationService: AuthenticationService) {
    }

    login(credentials: Credentials): void {
        this.authenticationService.authenticate(credentials);
    }

    register(account: Account): void {
        this.authenticationService.register(account);
    }
}