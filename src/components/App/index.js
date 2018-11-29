import React, {useState} from 'react';

//components
import Header from 'components/Header';
import Catalog from 'components/Catalog';

const App = () => {
  return (
    <div>
      <Header />
      {/* content */}
      <div className="pt-8 px-8 min-h-screen bg-blue max-w-2xl mx-auto">
        <Catalog />
      </div>
      <div className="text-center">footer</div>
    </div>
  );
};

export default App;
