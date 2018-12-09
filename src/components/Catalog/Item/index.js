import React from 'react';
import {Link} from 'react-router-dom';
//components
import BikeIcon from 'icons/BikeIcon.js';
import Customizable from './Customizable';

const Item = ({item, customizables}) => {
  return (
    <Link to={`/bike/${item.id}`}>
      <div className="my-4 w-64 inline-block shadow-md">
        <div className="bg-grey-light h-64">
          <BikeIcon wheelsColor="#fff" frameColor="red" />
        </div>
        <div className="h-48 px-3 pt-6 bg-white">
          <p className="text-grey-darkest font-bold text-sm uppercase">
            {item.name}
          </p>
          <div className="mt-4 text-grey font-bold text-sm ">
            from
            <span className="pl-2 text-grey-darker text-lg">
              {item.price} €
            </span>
            <div className="pb-5" />
            {customizables.map(customizable => (
              <Customizable
                key={customizable.name}
                customizable={customizable}
              />
            ))}
            {/* <div className="px-2 py-1 mt-6 bg-grey-lighter text-grey-darker shadow-sm">
            colors
          </div>
          <div className="px-2 py-1 mt-1 bg-grey-lighter text-grey-darker shadow-sm">
            Minimum oderd: 50 units
          </div>
          <div className="px-2 py-1 mt-1 bg-grey-lighter text-grey-darker shadow-sm">
            <div className="mr-2 align-middle inline-block w-3 h-3 bg-purple shadow-md rounded-full" />
            1 color printing
          </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
