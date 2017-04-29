import * as React from "react";
import {connect} from "react-redux";
import {autobind} from 'core-decorators';

import {Button} from 'reactstrap';

import * as serversActions from '../store/actions/servers'

@connect(()=>({}), { addServer: serversActions.addServer })
@autobind
export default class AddServer extends React.Component {
    onClick() {
        this.props.addServer();
    }

    render() {
        return <Button size="lg" outline color="success" onClick={this.onClick}>+</Button>
    }
}