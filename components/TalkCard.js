import styled from "styled-components";
import Link from "next/link";
import { BookmarkActive, BookmarkInactive } from "./BookmarkIcons";
import { normalizeRooms } from "../helpers/normalize";

function TalkCard({ talk, onBookmarkToggle }) {
  const date = talk.date.replaceAll(".", "-");
  const room = normalizeRooms(talk.room);

  return (
    <TalkItem>
      <StyledDiv>
        <StyledTalkLink href={`/${date}/${room}/talks/${talk.id}`}>
          <StyledTalkTitle>{`${talk.title.substring(
            0,
            25
          )}...`}</StyledTalkTitle>
        </StyledTalkLink>
        <Button
          type={"button"}
          onClick={() => {
            onBookmarkToggle(talk.id);
          }}
        >
          {talk.isBookmarked ? <BookmarkActive /> : <BookmarkInactive />}
        </Button>
      </StyledDiv>

      <StyledSpeakerName>{talk.authors[0]}</StyledSpeakerName>
      <TalkInfoWrapper>
        <p>{talk.session}</p>
        <p>{talk.time}</p>
      </TalkInfoWrapper>
    </TalkItem>
  );
}

const Button = styled.button`
  background-color: transparent;
  margin-top: 0.5em;
  margin-right: -0.8em;
  border: none;

  &:hover {
    background-color: transparent;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTalkLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const TalkItem = styled.li`
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  padding: 0.5em 1em;
  margin: 1em;
`;

const TalkInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTalkTitle = styled.h2`
  font-size: 1.1rem;
  color: #1f2937;
  margin-bottom: 0;
`;

const StyledSpeakerName = styled.h3`
  font-size: 1rem;
  margin: 1em 0;
`;

export default TalkCard;
