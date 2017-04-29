import {combineReducers} from "redux";

import applications from "./applications";
import servers from "./servers";

export default combineReducers({
    applications,
    servers
});
