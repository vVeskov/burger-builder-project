import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Layout from './hoc/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import reducer from './store/reducer';

const store = createStore(reducer)

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
