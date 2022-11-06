import  { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import UnitOne from '../ReduxInforUnit/UnitOne/Index'

const middleware = [thunk];
export const store = createStore(
    UnitOne,
    applyMiddleware(...middleware),
)