import StyledLink from "../../components/StyledLink";
import styled from "styled-components";

function FavoriteTalks({ talks }) {
  return (
    <>
      <h1>My Talks List</h1>

      <ul>
        {talks.map(
          (talk) => talk.isBookmarked && <li key={talk.id}>{talk.title}</li>
        )}
      </ul>

      <LinkFlexContainer>
        <StyledLink href={"/"}>Home</StyledLink>
      </LinkFlexContainer>
    </>
  );
}

const LinkFlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default FavoriteTalks;
