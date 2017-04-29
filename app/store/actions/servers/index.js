import {
    ADD_SERVER,
    DESTROY_SERVER,
    ADD_APPLICATION,
    DESTROY_APPLICATION
} from './types';

export function addServer() {
    return function (dispatch) {
        dispatch({ type: ADD_SERVER, payload: {} });
    };
}

export function destroyServer({ uuid }) {
    return function (dispatch) {
        dispatch({ type: DESTROY_SERVER, payload: { uuid } });
    };
}

export function addApplication({ application }) {
    return function (dispatch) {
        dispatch({ type: ADD_APPLICATION, payload: { application } });
    };
}

export function destroyApplication({ application }) {
    return function (dispatch) {
        dispatch({ type: DESTROY_APPLICATION, payload: { application } });
    };
}