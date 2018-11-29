import React from 'react';
import styled from 'styled-components';

//icons (imported as svg using babel plugin)
import faBike from '../../icons/bike.svg';
import faCart from '../../icons/shopping-cart-outline.svg';

//components
import FontAwesomeIcon from 'icons/Icon.js';

export const Icon = styled(FontAwesomeIcon)(() => ({
  width: `30px !important`,
  height: `30px !important`,
}));

const Header = () => {
  return (
    <div className="w-full px-4 md:px-12 bg-white h-16 shadow-md">
      {/* weird flex but ok */}
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
  );
};

export default Header;
