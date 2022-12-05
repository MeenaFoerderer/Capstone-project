import StyledLink from "../../components/StyledLink";
import styled from "styled-components";
import TalkCard from "../../components/TalkCard";

function Bookmarks({ talks, onBookmarkToggle, date, room }) {
  return (
    <>
      <h1>My Talks List</h1>

      <TalkList>
        {talks.map(
          (talk) =>
            talk.isBookmarked && (
              <TalkCard
                key={talk.id}
                talk={talk}
                onBookmarkToggle={onBookmarkToggle}
                date={date}
                room={room}
              />
            )
        )}
      </TalkList>

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

const TalkList = styled.ul`
  list-style: none;
  width: 400px;
  padding: 0;
  margin: 3.6em 0;
  display: inline-block;
`;

export default Bookmarks;
