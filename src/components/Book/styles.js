import styled from 'styled-components';

import flex from 'styles/flex';

const bookHeight = '75px';

export const Book = styled.div`
  color: #fff;
  padding: 10px;
  border: solid white;
  vertical-align: top;
`;

export const Image = styled.img`
  display: inline-block;
  height: ${bookHeight};
  width: 75px;
  /* border-radius: 25px; */
`;

export const TextContainer = styled.div`
  margin: auto;
  display: inline-block;
  vertical-align: top;
`;

export const Text = styled.span`
  margin: 0 10px;
  font-size: 16px;
`;

export const Price = styled(Text)`
  font-size: 18px;
  color: yellow;
  font-weight: bold;
  &:after {
    content: '€';
  }
`;
