import * as axios from "axios";

export function test() {
  return function(dispatch) {
    dispatch({ type: "TEST", payload: {} });
  };
}
