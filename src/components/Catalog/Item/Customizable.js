import React from 'react';

const Customizable = ({customizable}) => {
  return (
    <div className="px-2 py-1 mt-1 bg-grey-lighter text-xs text-grey-darker shadow-sm">
      <span className="">{customizable.name}: </span>
      {customizable.options.map((options, index) =>
        customizable.hasColors ? (
          <div
            className={`ml-2 align-middle inline-block w-3 h-3 bg-${
              options.choice
            } bg-${options.choice}-light shadow-md rounded-full`}
          />
        ) : (
          <span className="pl-2 font-normal" key={index}>
            {options.choice}
          </span>
        ),
      )}
    </div>
  );
};

export default Customizable;
