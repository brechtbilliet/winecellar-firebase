import {WineCellarApp} from "./common/containers/application/application.container.ts";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {HashLocationStrategy, LocationStrategy, APP_BASE_HREF} from "@angular/common";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {provide} from "@angular/core";
import "rxjs/add/operator/do";
import {Middleware, provideStore, usePreMiddleware, usePostMiddleware} from "@ngrx/store";
import {store} from "./common/store";
import {HTTP_PROVIDERS} from "@angular/http";
import {
    defaultFirebase,
    FIREBASE_PROVIDERS,
    AuthMethods,
    firebaseAuthConfig,
    AuthProviders
} from "angularfire2/angularfire2";

const actionLog: Middleware = (action: any) => {
    return action.do((val: any) => {
        console.warn("DISPATCHED ACTION: ", val);
    });
};
const stateLog: Middleware = (state: any) => {
    return state.do((val: any) => {
        console.info("NEW STATE: ", val);
    });
};

bootstrap(WineCellarApp, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    FIREBASE_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: "/"}),
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    defaultFirebase({
        apiKey: "AIzaSyAq0nePnAWWJ_74KoCa8VIKrBkxqCB3eoU",
        authDomain: "winecellar-50a24.firebaseapp.com",
        databaseURL: "https://winecellar-50a24.firebaseio.com",
        storageBucket: ""
    }),
    firebaseAuthConfig({
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
        remember: "default",
        scope: ["email"]
    }),
    provideStore(store),
    usePreMiddleware(actionLog),
    usePostMiddleware(stateLog)
]);