import styled from "styled-components";

const NavBar = styled.div`
  background-color: gray;
  height: 4em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.2em;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const NavButton = styled.a`
  width: 5em;
  height: 3.5em;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
`;

export { NavBar, NavButton };
