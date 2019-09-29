import React from 'react';
import ReactDOM from 'react-dom';
import Starship from './starship/Starship';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

ReactDOM.render(
    <Provider store={store}>
        <Starship />
    </Provider>

    , document.getElementById('root'));

serviceWorker.unregister();