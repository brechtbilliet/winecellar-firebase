import {collapsableSidebarReducer} from "./reducers/containers/collapsableSidebarReducer";
import {applicationReducer} from "./reducers/containers/applicationReducer";
import {
    CONTAINER_COLLAPSABLESIDEBAR_TOGGLE,
    CONTAINER_APPLICATION_DISABLE_BUSY_FLAG,
    CONTAINER_APPLICATION_ENABLE_BUSY_FLAG
} from "./actionTypes";
import {createReducerTree} from "create-reducer-tree";

let reducerComposer: any = {
    containers: {
        collapsableSidebar: {
            initialState: {isCollapsed: false},
            actions: [CONTAINER_COLLAPSABLESIDEBAR_TOGGLE],
            reducer: collapsableSidebarReducer
        },
        application: {
            initialState: {isBusy: false},
            actions: [CONTAINER_APPLICATION_ENABLE_BUSY_FLAG, CONTAINER_APPLICATION_DISABLE_BUSY_FLAG],
            reducer: applicationReducer
        }
    }
};

export let store = createReducerTree(reducerComposer);