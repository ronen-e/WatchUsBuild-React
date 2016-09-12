import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, Redirect } from 'react-router';

// Layout
import Layout from './components/layout/layout';

// Pages
import BlogPage from './components/pages/blog';
import PicturePage from './components/pages/picture';
import VideoPage from './components/pages/video';

import Customer from './components/customer.jsx';
import Customers from './components/customers.jsx';

const app = (
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

// Render when document is ready
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    app,
    document.getElementById('app')
  );
});
