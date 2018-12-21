import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const tabNames = ['orders', 'add_customizable', 'add_bike'];

const Navigation = () => {
  const [activeTabIndex, _setActiveTabIndex] = useState(0);
  const setActiveTabIndex = index => () => {
    _setActiveTabIndex(index);
  };
  const activeClasses = index =>
    index === activeTabIndex ? 'uppercase text-grey-darkest' : 'text-grey-dark hover:text-grey-darkest';
  return (
    <div>
      <div className="flex border-b-2">
        {tabNames.map((tabName, index) => (
          <div className="mr-1">
            <Link
              className={`bg-white inline-block py-2 px-4 font-semibold ${activeClasses(index)}`}
              to={`/admin/${tabName}`}
              onClick={setActiveTabIndex(index)}
            >
              {tabName}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Navigation;
