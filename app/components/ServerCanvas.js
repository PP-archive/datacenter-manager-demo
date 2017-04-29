import * as React from "react";
import {autobind} from "core-decorators";
import {connect} from "react-redux";

import {Col, Row} from 'reactstrap';

import Server from './Server';

@connect((state, ownProps) => {
    return {
        servers: state.servers
    }
})
@autobind
export default class ServerCanvas extends React.Component {
    componentWillMount() {
    }

    _drawCanvas(servers) {
        const rows = [];

        return _.chunk(servers, 4).map((rows, i) => {
            while (rows.length < 4) {
                rows.push(undefined);
            }

            return <Row key={i}>{_.map(rows, (server, t) => (!_.isUndefined(server) ? <Server key={server.uuid} server={server}/> : <Col key={t} xs="3"/>))}</Row>;
        })
    }

    render() {
        return (
            <Col xs="9">
                <h1>Server canvas</h1>
                {this._drawCanvas(this.props.servers)}
            </Col>
        );
    }
}
