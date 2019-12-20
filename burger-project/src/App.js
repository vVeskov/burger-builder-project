import React from 'react';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import Layout from './hoc/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import authReducer from './store/reducers/auth';
import * as actions from './store/actions/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

class App extends React.Component {


  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route path="/" exact component={BurgerBuilder} />
                <Route path="/orders" component={Orders} />
                <Route path="/auth" component={Auth} />
                <Route path="/logout" component={Logout} />
                <Route path="/checkout" component={Checkout} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </Provider>
      </div >
    );
  }
}



export default App;
