import * as React from "react";
import {autobind} from "core-decorators";
import {connect} from "react-redux";

import {Col, Card, CardBlock, CardTitle} from 'reactstrap';

import * as serversActions from '../store/actions/servers'

import Application from './Application';

@connect(()=>({}), {
    destroyServer: serversActions.destroyServer,
    addApplication: serversActions.addApplication
})
@autobind
export default class Server extends React.Component {
    componentWillMount() {
    }

    destroyServer() {
        this.props.destroyServer({uuid: this.props.server.uuid});

        // try to move the applications to the other server
        _.forEach(this.props.server.applications, (application) => {
            this.props.addApplication({application});
        })
    }
    render() {
        const { server } = this.props;
        return (
            <Col xs="3">
                <Card>
                    <CardBlock>
                        <CardTitle>{server.name} <i onClick={this.destroyServer} class="fa fa-ban" style={{color: 'red', cursor: 'pointer'}} aria-hidden="true"></i></CardTitle>
                        { server.applications.length ? server.applications.map((application) => <Application
                                key={application.key} application={application}/>) : undefined}
                    </CardBlock>
                </Card>
            </Col>
        );
    }
}
