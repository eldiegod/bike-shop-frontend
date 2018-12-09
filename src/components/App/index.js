import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//components
import Header from 'components/Header';
import Catalog from 'components/Catalog';
import BikeDetails from 'components/BikeDetails';
import Fallback from 'components/Fallback';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        {/* content */}
        <div className="py-12 px-4 md:px-0 min-h-85-screen max-w-2xl mx-auto">
          <Suspense fallback={<Fallback />}>
            <Route path="/" exact component={Catalog} />
            <Route path="/bike/:id" component={BikeDetails} />
            {/* <Route path="/users/" component={Users} /> */}
          </Suspense>
        </div>
        {/* footer */}
        <div className="text-center py-2">© Pandabize</div>
      </div>
    </Router>
  );
};

export default App;
