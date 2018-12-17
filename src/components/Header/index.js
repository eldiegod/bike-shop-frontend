import React from 'react';
import {Link} from 'react-router-dom';
import {useStore} from 'hooks/storeHook';

//icons (imported as svg using babel plugin)
import faCart from '../../icons/shopping-cart-outline.svg';

//components
import Icon from 'icons/Icon.js';

const Header = () => {
  const [store, dispatch] = useStore();
  return (
    <div className="w-full px-4 md:px-12 bg-white h-16 shadow-md">
      {/* weird flex but ok */}
      <div className="w-1/3 h-16 inline-flex content-center flex-wrap ">
        <Link
          to="/"
          className="no-underline font-bold text-grey-darker text-center "
        >
          Pandabize
        </Link>
      </div>
      <div className="w-2/3 inline">
        <div className="pt-4 float-right">
          <Link to="/my-cart">
            <Icon className="w-8" icon={faCart} />
          </Link>
        </div>
        <span className="float-right pt-6 text-lg">
          {store.order.customBikes.length}
        </span>
      </div>
    </div>
  );
};

export default Header;
