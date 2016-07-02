import {
    CONTAINER_APPLICATION_ENABLE_BUSY_FLAG,
    CONTAINER_APPLICATION_DISABLE_BUSY_FLAG,
    CONTAINER_COLLAPSABLESIDEBAR_TOGGLE
} from "./actionTypes";
import {Action} from "@ngrx/store";

export function enableBusy(): Action {
    return {
        type: CONTAINER_APPLICATION_ENABLE_BUSY_FLAG
    };
}

export function disableBusy(): Action {
    return {
        type: CONTAINER_APPLICATION_DISABLE_BUSY_FLAG
    };
}

export function toggleSidebar(): Action {
    return {
        type: CONTAINER_COLLAPSABLESIDEBAR_TOGGLE
    };
}