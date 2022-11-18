import styled from "styled-components";

const NavBar = styled.div`
  background-color: gray;
  height: 4em;
  display: flex;
  justify-content: space-between;
  padding: 0.2em;
`;

const NavButton = styled.button`
  width: 5em;
  height: 3.5em;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
`;

export { NavBar, NavButton };
