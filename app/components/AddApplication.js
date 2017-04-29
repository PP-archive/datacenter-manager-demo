import * as React from "react";
import {connect} from "react-redux";
import {autobind} from 'core-decorators';

import {Button} from 'reactstrap';

import * as serversActions from '../store/actions/servers'

@connect(() => ({}), { addApplication: serversActions.addApplication })
@autobind
export default class AddApplication extends React.Component {
    onClick() {
        this.props.addApplication({application: this.props.application});
    }

    render() {
        return <Button outline color="success" onClick={this.onClick}>+</Button>
    }
}