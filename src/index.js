import './styles/bundle.css';
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo-hooks';

import * as serviceWorker from './serviceWorker';
import App from 'components/App';
import Fallback from 'components/Fallback';
import {Provider} from 'hooks/storeHook';
import reducer from './reducer';

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000/graphql',
});

const render = Component => {
  return ReactDOM.render(
    <Suspense fallback={<Fallback />}>
      <Provider reducer={reducer}>
        <ApolloProvider client={client}>
          <Component />
        </ApolloProvider>
      </Provider>
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
