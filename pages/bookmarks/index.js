import StyledLink from "../../components/StyledLink";
import styled from "styled-components";

function FavoriteTalks({ talks, setTalks }) {
  function toggleFavorite(id) {
    const newTalksArray = talks.map((talk) => {
      if (talk.id === id) {
        return {
          ...talk,
          isBookmarked: !talk.isBookmarked,
        };
      } else {
        return talk;
      }
    });

    setTalks(newTalksArray);
  }

  return (
    <>
      <h1>My Talks List</h1>

      <ul>
        {talks?.map((talk) => {
          if (talk.isBookmarked === true) {
            return <li toggleFavorite={toggleFavorite}>{talk.title}</li>;
          } else {
            return null;
          }
        })}
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
