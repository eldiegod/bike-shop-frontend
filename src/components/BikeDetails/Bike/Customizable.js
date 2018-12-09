import React from 'react';

const Customizable = ({customizable}) => {
  return (
    <div className="px-2 py-1 mt-1 bg-grey-lighter text-grey-darker shadow-sm">
      <span className="pt-1 align-middle">{customizable.name}: </span>
      {customizable.options.map((options, index) =>
        customizable.hasColors ? (
          <div
            key={index}
            className={`ml-2 align-middle inline-block w-5 h-5 bg-${
              options.choice
            } bg-${
              options.choice
            }-light hover:shadow-md shadow-lg rounded-full hover:rounded-none`}
          />
        ) : (
          <span
            className="pl-2 pt-1 align-middle font-normal"
            key={index}
          >
            {options.choice}
          </span>
        ),
      )}
    </div>
  );
};

export default Customizable;
