import { combineReducers } from "redux";
import Info from "./InforPercent";
const reducerUnitOne = combineReducers({
    inforUnitOne : Info,
});

export default (state, action) => reducerUnitOne(state, action);
