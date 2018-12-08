import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//components
import Header from 'components/Header';
import Catalog from 'components/Catalog';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        {/* content */}
        <div className="py-12 px-4 md:px-0 min-h-screen max-w-2xl mx-auto">
          <Route path="/" exact component={Catalog} />
          <Route path="/bike/:bikeId" component={() => 'hi'} />
          {/* <Route path="/users/" component={Users} /> */}
        </div>
        <div className="text-center py-2">© Pandabize</div>
      </div>
    </Router>
  );
};

export default App;
