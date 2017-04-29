import * as React from "react";
import {autobind} from "core-decorators";
import {connect} from "react-redux";

import {Row, Col} from 'reactstrap';

import DestroyServer from './DestroyServer';
import AddServer from './AddServer';

import AvailableApplications from './AvailableApplications';

@connect(store => ({}))
@autobind
export default class Aside extends React.Component {
    componentWillMount() {
    }

    render() {
        return (
            <Col xs="3">
                <Row>
                    <Col class="text-center"><DestroyServer/></Col>
                    <Col class="text-center"><AddServer/></Col>
                </Row>
                <Row>
                    <Col>
                        <AvailableApplications/>
                    </Col>
                </Row>
            </Col>
        );
    }
}
