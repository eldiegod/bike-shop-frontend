import React, {useState} from 'react';
import styled from 'styled-components';

//icons (imported as svg using babel plugin)
import faBike from '../../icons/bike.svg';
import faCart from '../../icons/shopping-cart-outline.svg';

//components
import FontAwesomeIcon from 'icons/Icon.js';

//styles

export const Icon = styled(FontAwesomeIcon)(() => ({
  width: `30px !important`,
  height: `30px !important`,
}));

const App = () => {
  return (
    <div className="h-screen bg-red">
      {/* header */}
      <div className="w-full px-4 md:px-12 bg-white h-16 ">
        {/* logo */}
        <div className="w-1/3 h-16 inline-flex content-center flex-wrap ">
          <p className="font-bold text-grey-darker text-center ">
            Pandabize
          </p>
        </div>
        <div className="w-2/3 inline">
          <div className="pt-4 float-right">
            <Icon icon={faCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
