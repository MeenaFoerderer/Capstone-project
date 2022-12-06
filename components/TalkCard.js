import styled from "styled-components";
import Link from "next/link";
import { BookmarkActive, BookmarkInactive } from "./BookmarkIcons";
import { normalizeRooms } from "../helpers/normalize";

function TalkCard({ talk, onBookmarkToggle }) {
  const date = talk.date.replaceAll(".", "-");
  const room = normalizeRooms(talk.room);

  return (
    <TalkItem>
      <StyledTalkTime>{talk.time}</StyledTalkTime>

      <StyledCard>
        <CardHeader>
          <StyledTalkLink href={`/${date}/${room}/talks/${talk.id}`}>
            <StyledTalkTitle>{`${talk.title.substring(
              0,
              22
            )}...`}</StyledTalkTitle>
          </StyledTalkLink>
          <Button
            aria-label="toggle bookmark button"
            type={"button"}
            onClick={() => {
              onBookmarkToggle(talk.id);
            }}
          >
            {talk.isBookmarked ? <BookmarkActive /> : <BookmarkInactive />}
          </Button>
        </CardHeader>

        <StyledSpeakerName>{talk.authors[0]}</StyledSpeakerName>
        <TalkInfoWrapper>
          <p>{talk.session}</p>
        </TalkInfoWrapper>
      </StyledCard>
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

const TalkItem = styled.li`
  margin: 1em 1em 1em 1.5em;
  display: flex;
  border-top: 1px solid #c9c7c5;
`;

const StyledTalkTime = styled.p`
  color: #7a7a7a;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  padding: 0em 1em;
  width: 100%;
  margin-top: 1em;
  margin-left: 0.9em;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTalkLink = styled(Link)`
  text-decoration: none;
  color: #303030;
`;

const TalkInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTalkTitle = styled.h2`
  font-size: 1.1rem;
  color: #303030;
  margin-bottom: 0;
  font-weight: 600;
`;

const StyledSpeakerName = styled.h3`
  font-size: 1rem;
  margin: 0.2em 0;
  font-weight: 400;
  color: #474747;
`;

export default TalkCard;
