import React from 'react';

const Error = ({err}) => {
  console.log(err);
  return (
    <div className="text-center mt-16">
      Something went wrong, have you tried{' '}
      <span className="text-blue cursor-pointer" onClick={() => window.location.reload()}>
        refreshing
      </span>{' '}
      the page? 🤷‍♂
      <div className="mt-4 opacity-25">
        <small>*additional info will be at the devs console*</small>
      </div>
    </div>
  );
};

export default Error;
