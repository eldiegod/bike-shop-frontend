import React, {useState} from 'react';

//components
import Header from 'components/Header';
import Catalog from 'components/Catalog';

const App = () => {
  return (
    <div>
      <Header />
      {/* content */}
      <div className="py-16 px-4 md:px-0 min-h-screen max-w-2xl mx-auto">
        <Catalog />
      </div>
      <div className="text-center py-2">© Pandabize</div>
    </div>
  );
};

export default App;
