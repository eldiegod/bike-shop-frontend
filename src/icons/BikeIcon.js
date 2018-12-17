import React from 'react';
import styled from 'styled-components';

// icons
import faBike from './bike2.svg';

//components
import Icon from 'icons/Icon.js';
// TODO: maybe dont use styled?
const BikeIcon = styled(Icon)`
  stroke: currentColor;

  .bike-wheel {
    stroke: currentColor;
    color: ${({wheelsColor}) => wheelsColor || 'black'};
  }

  .bike-frame {
    stroke: currentColor;
    color: ${({frameColor}) => frameColor || 'green'};
  }
`;

export default ({className, frameColor, wheelsColor}) => (
  <BikeIcon
    className={className}
    icon={faBike}
    wheelsColor={wheelsColor}
    frameColor={frameColor}
  />
);
