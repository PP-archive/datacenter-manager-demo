import * as React from "react";

import {ListGroupItem, Row, Col} from 'reactstrap';

import DestroyApplication from './DestroyApplication';
import AddApplication from './AddApplication';

export default ({ application }) => {
    return <ListGroupItem>
        <Row>
            <Col xs="6">
                <span style={{ 'color': application.color, 'fontWeight': 'bolder' }}>{application.name}</span>
            </Col>
            <Col xs="3">
                <DestroyApplication application={application}/>
            </Col>
            <Col xs="3">
                <AddApplication application={application}/>
            </Col>
        </Row>
    </ListGroupItem>
}