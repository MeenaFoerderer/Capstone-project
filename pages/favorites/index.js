import StyledLink from "../../components/StyledLink";
import styled from "styled-components";

function FavoriteTalks({ contributions, setContributions, talks }) {
  console.log(contributions);

  function toggleFavorite(id) {
    const newTalksArray = contributions.map((contribution) => {
      if (contribution.id === id) {
        return {
          ...contribution,
          isBookmarked: !contribution.isBookmarked,
        };
      } else {
        return contribution;
      }
    });

    console.log(newTalksArray);
    setContributions(newTalksArray);
  }

  return (
    <>
      <h1>My Talks List</h1>

      <ul>
        {contributions?.map((contribution) => {
          if (contribution.isBookmarked === true) {
            return (
              <li toggleFavorite={toggleFavorite}>{contribution.title}</li>
            );
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
