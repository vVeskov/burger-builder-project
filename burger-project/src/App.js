import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/" exact component={BurgerBuilder} />
              <Route path="/orders" component={Orders} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </Layout>
        </BrowserRouter>

      </div >
    );
  }

}

export default App;
