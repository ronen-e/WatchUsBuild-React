import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Router, Route, Redirect} from 'react-router';

// Layout
import Layout from './components/layout/layout';

// Pages
import BlogPage from './components/pages/blog';
import PicturePage from './components/pages/picture';
import VideoPage from './components/pages/video';

const app = (
  <Router history={hashHistory}>
    <Redirect from="/" to="/blog" />
    <Route path="/" component={ Layout }>
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
    document.getElementById('comment-box')
  );
});
