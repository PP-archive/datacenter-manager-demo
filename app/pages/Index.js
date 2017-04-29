import * as React from "react";
import {autobind} from "core-decorators";

import {withRouter} from 'react-router'
import {Container, Row, Col, Button} from 'reactstrap';

import Aside from '../components/Aside';
import ServerCanvas from '../components/ServerCanvas';

@withRouter
@autobind
class IndexPage extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Aside/>
                    <ServerCanvas/>
                </Row>
            </Container>
        );
    }
}

export {IndexPage as default};
