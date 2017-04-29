import _ from 'lodash';
import uuid from 'uuid';

const applications = [
    { name: 'Hadoop', shortName: 'Hd', color: '#ec1fdb' },
    { name: 'Rails', shortName: 'Rs', color: '#0e1fd5' },
    { name: 'Chronos', shortName: 'Ch', color: '#1fdfff' },
    { name: 'Storm', shortName: 'St', color: '#9bffb2' },
    { name: 'Spark', shortName: 'Sp', color: '#5fff06' },
]

const defaultState = [];
_.forEach(applications, (application) => {
    defaultState.push({
        ...application,
        uuid: uuid.v4()
    })
});

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    }
}