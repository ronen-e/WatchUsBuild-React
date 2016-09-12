import React, { Component } from 'react';
import { browserHistory, Router, Route, Redirect } from 'react-router';

// Layout
import Layout from './layout/layout';

// Pages
import BlogPage from './pages/blog';
import PicturePage from './pages/picture';
import VideoPage from './pages/video';

import Customer from './customer.jsx';
import Customers from './customers.jsx';

export default class App extends Component {
    render() {
        return (
          <Router history={ browserHistory }>
            <Redirect from="/" to="/blog" />
            <Route path="/" component={ Layout }>
                <Route path="customers" component={ Customers }>
                    <Route path="/customer/:customerId" component={ Customer }/>
                </Route>
                <Route path="blog" component={ BlogPage } />
                <Route path="picture" component={ PicturePage } />
                <Route path="video" component={ VideoPage } />
            </Route>
          </Router>
        );
    }
}
