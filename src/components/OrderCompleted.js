import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Confetti from 'react-dom-confetti';

const OrderCompleted = () => {
  const [active, setActive] = useState(false);
  // Wait a bit to show the confetti to make sure the user sees it
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, 500);
    return () => clearTimeout(timer);
  });
  return (
    <div className="text-center mt-16">
      <div onClick={() => setActive(!active)} className=" mb-4">
        Congratulations, your order is on it's way... 🚚
        <div className="mx-auto">
          <div className="w-1 mx-auto">
            <Confetti
              active={active}
              config={{
                angle: 90,
                spread: 239,
                startVelocity: 45,
                elementCount: 100,
                decay: 0.9,
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <Link className="text-blue" to="/">
          Go back..?
        </Link>
      </div>
    </div>
  );
};

export default OrderCompleted;
