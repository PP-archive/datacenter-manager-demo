import * as React from "react";
import {autobind} from "core-decorators";
import {connect} from "react-redux";

import {ListGroup, ListGroupItem} from 'reactstrap';

import AvailableApplicationsItem from './AvailableApplicationsItem';

@connect((state, ownProps) => {
    return {
        applications: state.applications
    }
})
@autobind
export default class AvailableApplications extends React.Component {
    componentWillMount() {
    }

    render() {
        return (
            <div>
                <h2>Available Apps:</h2>
                <ListGroup>
                    {this.props.applications.map((application) => {
                        return <AvailableApplicationsItem key={application.uuid} application={application} />
                    })}
                </ListGroup>
            </div>
        );
    }
}
