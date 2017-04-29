import * as React from "react";
import {connect} from "react-redux";
import {autobind} from 'core-decorators';

import {Button} from 'reactstrap';

import * as serversActions from '../store/actions/servers'

@connect(() => ({}), { destroyApplication: serversActions.destroyApplication })
@autobind
export default class DestroyApplication extends React.Component {
    onClick() {
        this.props.destroyApplication({application: this.props.application});
    }

    render() {
        return <Button outline color="danger" onClick={this.onClick}>-</Button>
    }
}