import './styles/bundle.css';
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo-hooks';

import Fallback from 'components/Fallback';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  clientState: {
    // defaults,
    // resolvers,
    // typeDefs
  },
});

const render = Component => {
  return ReactDOM.render(
    <Suspense fallback={<Fallback />}>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    </Suspense>,
    document.getElementById('root'),
  );
};

render(App);

// Hot reloading
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
