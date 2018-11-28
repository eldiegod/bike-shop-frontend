import styled from 'styled-components';

import flex from 'styles/flex';

export const Home = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #526075;
  border-bottom-left-radius: 5;
  border-bottom-right-radius: 5;
  padding: 15px 15px;
  overflow: hidden;
  margin: auto;
  text-align: center;
`;

export const Logo = styled.a`
  flex: 2;
  img {
    height: 50px;
  }
`;

export const Links = styled.div({
  ...flex.horizontal,
  ...flex.centerHorizontal,
});

export const Link = styled.a`
  flex: 1;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  :hover {
    color: #fff;
  }
`;

export const Content = styled.div`
  padding: 100px 25px;
  min-height: 100vh;
  width: 100vw;
  /* background-color: #1a2837; */
`;
