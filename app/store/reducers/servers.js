import uuid from 'uuid';
import _ from 'lodash';
import Haikunator from 'haikunator';
import moment from 'moment';

const haikunator = new Haikunator();

import {
    ADD_SERVER,
    DESTROY_SERVER,
    ADD_APPLICATION,
    DESTROY_APPLICATION
} from '../actions/servers/types';

const defaultState = [];
// fill with four default servers
_.times(4, () => {
    defaultState.push({ uuid: uuid.v4(), name: haikunator.haikunate(), createdAt: moment(), applications: [] })
});

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_SERVER: {
            let _state = _.cloneDeep(state);
            _state.push({ uuid: uuid.v4(), name: haikunator.haikunate(), createdAt: moment(), applications: [] });
            return _state;
        }
        case DESTROY_SERVER: {
            const { uuid } = action.payload;

            let _state = _.cloneDeep(state);
            _.remove(_state, (server) => server.uuid === uuid);
            return _state;
        }
        case ADD_APPLICATION: {
            const { application } = action.payload;

            let _state = _.cloneDeep(state);

            // search for the free server
            let serverToAddTo = _.find(_state, (server) => server.applications.length === 0) || _.find(_state, (server) => server.applications.length === 1);

            if (serverToAddTo) {
                serverToAddTo.applications.push({
                    ...application,
                    key: uuid.v4(),
                    createdAt: moment()
                });
            } else {
                console.warn(`There is no server with free capacity for the application: ${application.name}`);
            }

            return _state;
        }
        case DESTROY_APPLICATION: {
            const { application } = action.payload;
            let _state = _.cloneDeep(state);

            const normalizedApplications = [];

            // find all the applications of a kind
            _.forEach(_state, (server) => {
                _.forEach(server.applications, (suspectedApplication) => {
                    if (suspectedApplication.uuid === application.uuid) {
                        normalizedApplications.push({ ...suspectedApplication, serverUuid: server.uuid })
                    }
                });
            });

            // sort them by the time of creation
            _.sortBy(normalizedApplications, (record) => moment(record).valueOf());

            // remove the application from the list
            if (normalizedApplications.length) {
                const applicationToDestroy = _.last(normalizedApplications);
                _.remove(/*find the server where the app is*/_.find(_state, (server) => server.uuid === applicationToDestroy.serverUuid).applications,
                    /* destroy the application by key */(application) => application.key === applicationToDestroy.key);
            }

            return _state;
        }
        default:
            return state;
    }
}