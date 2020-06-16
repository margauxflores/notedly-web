import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Import Shared Layout Component
import Layout from '../components/Layout';

//Import routes
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/mynotes" component={MyNotes} />
        <Route path="/favorites" component={Favorites} />
      </Layout>
    </Router>
  );
};

export default Pages;