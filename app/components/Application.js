import * as React from "react";
import {autobind} from "core-decorators";
import {connect} from "react-redux";
import moment from 'moment';

import {Card, CardBlock, CardTitle, CardSubtitle, CardText} from 'reactstrap';

@connect()
@autobind
export default class Application extends React.Component {
    componentWillMount() {
    }

    render() {
        const { application } = this.props;
        return (
            <Card>
                <CardBlock>
                    <CardTitle style={{ 'color': application.color }}>{application.shortName}</CardTitle>
                    <CardSubtitle>{application.name}</CardSubtitle>
                    <CardText><small>Added {moment(application.createdAt).from(moment())}</small></CardText>
                </CardBlock>
            </Card>
        );
    }
}
