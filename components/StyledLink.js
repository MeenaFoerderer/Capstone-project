import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 5em;
  height: 3.5em;
  padding: 1em 3em;
  border-radius: 5px;
  border: none;
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledLink;
