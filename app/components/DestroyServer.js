import * as React from "react";
import {connect} from 'react-redux';
import {autobind} from 'core-decorators';

import * as serversActions from '../store/actions/servers'

import {Button} from 'reactstrap';

@connect((state) => ({ servers: state.servers }), {
    destroyServer: serversActions.destroyServer,
    addApplication: serversActions.addApplication
})
@autobind
export default class DestroyServer extends React.Component {
    onClick() {
        const serverToRemove = _.last(this.props.servers);
        this.props.destroyServer({ uuid: serverToRemove.uuid });

        // try to create new applications
        if(serverToRemove.applications.length) {
            _.forEach(serverToRemove.applications, (application) => {
                this.props.addApplication({application});
            })
        }
    }

    render() {
        return <Button size="lg" outline color="danger" disabled={this.props.servers.length === 0 ? true : false}
                       onClick={this.onClick}>-</Button>
    }
}