import * as React from "react";
import { autobind } from "core-decorators";
import { connect } from "react-redux";

@connect(store => ({}))
@autobind
export default class Test extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
      <div>Hello</div>
    );
  }
}
