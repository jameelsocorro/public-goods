import './App.css';
import React, { Component, Fragment } from 'react';

import { Navbar } from './components';

import Introduction from './sections/introduction';
import Promise from './sections/promise';
import ToothPaste from './sections/toothpaste';
import Shop from './sections/shop';
import Reviews from './sections/reviews';
import Contact from './sections/contact';

class App extends Component {
  render() {
    return (
      <Fragment>
				<Navbar />
				<Introduction />
				<Promise />
				<ToothPaste />
				<Shop />
				<Reviews />
        <Contact />
			</Fragment>
    );
  }
}

export default App;
